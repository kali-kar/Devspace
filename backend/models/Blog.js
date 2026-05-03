const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true, maxlength: [1000, 'Comment cannot exceed 1000 chars'] },
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters'],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  excerpt: {
    type: String,
    maxlength: [500, 'Excerpt cannot exceed 500 characters'],
  },
  coverImage: { type: String, default: '' },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tags:     [{ type: String, trim: true, lowercase: true }],
  likes:    [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema],
  published: { type: Boolean, default: true },
  readTime:  { type: Number, default: 1 }, // in minutes
}, { timestamps: true });

// Auto-calculate read time before save
blogSchema.pre('save', function (next) {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  this.readTime = Math.ceil(wordCount / wordsPerMinute);
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
