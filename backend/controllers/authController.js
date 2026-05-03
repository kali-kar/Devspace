const User = require('../models/User');
const { generateToken } = require('../utils/jwt');
const { OAuth2Client } = require('google-auth-library');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper to generate unique username from name/email
const generateUsername = async (base) => {
  const slug = base.toLowerCase().replace(/[^a-z0-9]/g, '_').slice(0, 20);
  let username = slug;
  let count = 1;
  while (await User.findOne({ username })) {
    username = `${slug}_${count++}`;
  }
  return username;
};

// @desc    Register user
// @route   POST /api/auth/register
const register = async (req, res, next) => {
  try {
    const { name, email, password, username } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    if (await User.findOne({ username })) {
      return res.status(400).json({ success: false, message: 'Username already taken' });
    }

    const user = await User.create({ name, email, password, username });
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !user.password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);
    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Google OAuth login/register
// @route   POST /api/auth/google
const googleAuth = async (req, res, next) => {
  try {
    const { credential } = req.body;

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub: googleId, email, name, picture } = ticket.getPayload();

    let user = await User.findOne({ $or: [{ googleId }, { email }] });

    if (!user) {
      const username = await generateUsername(name || email.split('@')[0]);
      user = await User.create({
        name,
        email,
        googleId,
        avatar: picture,
        username,
      });
    } else if (!user.googleId) {
      user.googleId = googleId;
      if (!user.avatar && picture) user.avatar = picture;
      await user.save();
    }

    const token = generateToken(user._id);
    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
const getMe = async (req, res) => {
  res.json({ success: true, user: req.user });
};

module.exports = { register, login, googleAuth, getMe };
