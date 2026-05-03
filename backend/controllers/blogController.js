const Blog = require('../models/Blog');
const slugify = require('slugify');

// generate unique slug
const makeSlug = async (title, existingId = null) => {
  let slug = slugify(title, { lower: true, strict: true });
  const existing = await Blog.findOne({ slug, ...(existingId && { _id: { $ne: existingId } }) });
  if (existing) slug = `${slug}-${Date.now()}`;
  return slug;
};

// @desc    Get all published blogs
// @route   GET /api/blogs
const getBlogs = async (req, res, next) => {
  try {
    const page  = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const tag   = req.query.tag;
    const skip  = (page - 1) * limit;

    const filter = { published: true };
    if (tag) filter.tags = tag;

    const blogs = await Blog.find(filter)
      .populate('author', 'name username avatar')
      .select('-content')
      .sort('-createdAt')
      .skip(skip)
      .limit(limit);

    const total = await Blog.countDocuments(filter);
    res.json({ success: true, blogs, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blogs/:slug
const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true })
      .populate('author', 'name username avatar bio')
      .populate('comments.user', 'name username avatar');

    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    res.json({ success: true, blog });
  } catch (err) {
    next(err);
  }
};

// @desc    Create blog
// @route   POST /api/blogs
const createBlog = async (req, res, next) => {
  try {
    const { title, content, excerpt, tags, coverImage, published } = req.body;
    const slug = await makeSlug(title);

    const blog = await Blog.create({
      title, content, excerpt, tags, coverImage, published,
      slug,
      author: req.user._id,
    });

    await blog.populate('author', 'name username avatar');
    res.status(201).json({ success: true, blog });
  } catch (err) {
    next(err);
  }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
const updateBlog = async (req, res, next) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    const { title, content, excerpt, tags, coverImage, published } = req.body;
    if (title && title !== blog.title) {
      blog.slug = await makeSlug(title, blog._id);
      blog.title = title;
    }
    if (content    !== undefined) blog.content    = content;
    if (excerpt    !== undefined) blog.excerpt    = excerpt;
    if (tags       !== undefined) blog.tags       = tags;
    if (coverImage !== undefined) blog.coverImage = coverImage;
    if (published  !== undefined) blog.published  = published;

    await blog.save();
    await blog.populate('author', 'name username avatar');
    res.json({ success: true, blog });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    await blog.deleteOne();
    res.json({ success: true, message: 'Blog deleted' });
  } catch (err) {
    next(err);
  }
};

// @desc    Toggle like
// @route   POST /api/blogs/:id/like
const toggleLike = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    const userId = req.user._id.toString();
    const liked  = blog.likes.some(id => id.toString() === userId);

    if (liked) {
      blog.likes = blog.likes.filter(id => id.toString() !== userId);
    } else {
      blog.likes.push(req.user._id);
    }

    await blog.save();
    res.json({ success: true, likes: blog.likes.length, liked: !liked });
  } catch (err) {
    next(err);
  }
};

// @desc    Add comment
// @route   POST /api/blogs/:id/comments
const addComment = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    blog.comments.push({ user: req.user._id, content: req.body.content });
    await blog.save();
    await blog.populate('comments.user', 'name username avatar');

    const comment = blog.comments[blog.comments.length - 1];
    res.status(201).json({ success: true, comment });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete comment
// @route   DELETE /api/blogs/:id/comments/:commentId
const deleteComment = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    const comment = blog.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ success: false, message: 'Comment not found' });

    const isAuthor  = comment.user.toString() === req.user._id.toString();
    const isBlogOwner = blog.author.toString() === req.user._id.toString();
    if (!isAuthor && !isBlogOwner) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    comment.deleteOne();
    await blog.save();
    res.json({ success: true, message: 'Comment deleted' });
  } catch (err) {
    next(err);
  }
};

// @desc    Get blogs by current user
// @route   GET /api/blogs/my
const getMyBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ author: req.user._id })
      .select('title slug excerpt tags published createdAt readTime likes comments')
      .sort('-createdAt');
    res.json({ success: true, blogs });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBlogs, getBlog, createBlog, updateBlog, deleteBlog,
  toggleLike, addComment, deleteComment, getMyBlogs,
};
