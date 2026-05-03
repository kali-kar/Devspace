const User = require('../models/User');
const Blog = require('../models/Blog');

// @desc    Get public profile by username
// @route   GET /api/users/:username
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username })
      .select('-googleId');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const blogs = await Blog.find({ author: user._id, published: true })
      .select('title slug excerpt tags createdAt readTime likes')
      .sort('-createdAt')
      .limit(6);

    res.json({ success: true, user, blogs });
  } catch (err) {
    next(err);
  }
};

// @desc    Update current user's profile
// @route   PUT /api/users/profile
const updateProfile = async (req, res, next) => {
  try {
    const allowedFields = [
      'name', 'bio', 'location', 'website',
      'github', 'twitter', 'linkedin', 'skills',
      'experience', 'projects', 'avatar',
    ];

    const updates = {};
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-googleId');

    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

// @desc    Search users
// @route   GET /api/users/search?q=
const searchUsers = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) return res.json({ success: true, users: [] });

    const users = await User.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { username: { $regex: q, $options: 'i' } },
        { skills: { $regex: q, $options: 'i' } },
      ],
    }).select('name username avatar bio skills').limit(10);

    res.json({ success: true, users });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all users (for explore page)
// @route   GET /api/users
const getUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select('name username avatar bio skills createdAt')
      .sort('-createdAt')
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments();
    res.json({ success: true, users, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProfile, updateProfile, searchUsers, getUsers };
