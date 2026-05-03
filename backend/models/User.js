const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const experienceSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  company:  { type: String, required: true },
  location: { type: String },
  from:     { type: Date, required: true },
  to:       { type: Date },
  current:  { type: Boolean, default: false },
  description: { type: String },
}, { _id: true });

const projectSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  link:        { type: String },
  github:      { type: String },
  tags:        [{ type: String }],
}, { _id: true });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9_-]{3,30}$/, 'Username must be 3-30 chars, only letters, numbers, _ and -'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, // Don't return password by default
  },
  googleId: { type: String, unique: true, sparse: true },
  avatar:   { type: String, default: '' },
  bio:      { type: String, maxlength: [500, 'Bio cannot exceed 500 characters'], default: '' },
  location: { type: String, default: '' },
  website:  { type: String, default: '' },
  github:   { type: String, default: '' },
  twitter:  { type: String, default: '' },
  linkedin: { type: String, default: '' },
  skills:   [{ type: String, trim: true }],
  experience: [experienceSchema],
  projects:   [projectSchema],
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
