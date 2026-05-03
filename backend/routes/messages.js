const express = require('express');
const router  = express.Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/auth');
const {
  sendMessage, getInbox, getSent, getMessage, deleteMessage, getUnreadCount,
} = require('../controllers/messageController');

router.use(protect); // All message routes require auth

router.post('/', [
  body('recipientUsername').trim().notEmpty().withMessage('Recipient is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('body').trim().notEmpty().withMessage('Message body is required'),
  validate,
], sendMessage);

router.get('/inbox',        getInbox);
router.get('/sent',         getSent);
router.get('/unread-count', getUnreadCount);
router.get('/:id',          getMessage);
router.delete('/:id',       deleteMessage);

module.exports = router;
