const express = require('express');
const router  = express.Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect, optionalAuth } = require('../middleware/auth');
const {
  getBlogs, getBlog, createBlog, updateBlog, deleteBlog,
  toggleLike, addComment, deleteComment, getMyBlogs,
} = require('../controllers/blogController');

router.get('/',    getBlogs);
router.get('/my',  protect, getMyBlogs);
router.get('/:slug', optionalAuth, getBlog);

router.post('/', protect, [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  validate,
], createBlog);

router.put('/:id',    protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

router.post('/:id/like', protect, toggleLike);

router.post('/:id/comments', protect, [
  body('content').trim().notEmpty().withMessage('Comment cannot be empty'),
  validate,
], addComment);

router.delete('/:id/comments/:commentId', protect, deleteComment);

module.exports = router;
