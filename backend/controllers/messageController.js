const Message = require('../models/Message');
const User = require('../models/User');

// @desc    Send a message
// @route   POST /api/messages
const sendMessage = async (req, res, next) => {
  try {
    const { recipientUsername, subject, body } = req.body;

    const recipient = await User.findOne({ username: recipientUsername });
    if (!recipient) {
      return res.status(404).json({ success: false, message: 'Recipient not found' });
    }
    if (recipient._id.toString() === req.user._id.toString()) {
      return res.status(400).json({ success: false, message: 'Cannot send message to yourself' });
    }

    const message = await Message.create({
      sender: req.user._id,
      recipient: recipient._id,
      subject,
      body,
    });

    await message.populate('sender', 'name username avatar');
    await message.populate('recipient', 'name username avatar');

    res.status(201).json({ success: true, message });
  } catch (err) {
    next(err);
  }
};

// @desc    Get inbox (received messages)
// @route   GET /api/messages/inbox
const getInbox = async (req, res, next) => {
  try {
    const messages = await Message.find({
      recipient: req.user._id,
      deletedByRecipient: false,
    })
      .populate('sender', 'name username avatar')
      .sort('-createdAt');

    res.json({ success: true, messages });
  } catch (err) {
    next(err);
  }
};

// @desc    Get sent messages
// @route   GET /api/messages/sent
const getSent = async (req, res, next) => {
  try {
    const messages = await Message.find({
      sender: req.user._id,
      deletedBySender: false,
    })
      .populate('recipient', 'name username avatar')
      .sort('-createdAt');

    res.json({ success: true, messages });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single message
// @route   GET /api/messages/:id
const getMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id)
      .populate('sender', 'name username avatar')
      .populate('recipient', 'name username avatar');

    if (!message) return res.status(404).json({ success: false, message: 'Message not found' });

    const isParticipant =
      message.sender._id.toString() === req.user._id.toString() ||
      message.recipient._id.toString() === req.user._id.toString();

    if (!isParticipant) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    // Mark as read if recipient
    if (message.recipient._id.toString() === req.user._id.toString() && !message.readAt) {
      message.readAt = new Date();
      await message.save();
    }

    res.json({ success: true, message });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete message
// @route   DELETE /api/messages/:id
const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: 'Message not found' });

    const userId = req.user._id.toString();
    if (message.sender.toString() === userId) {
      message.deletedBySender = true;
    } else if (message.recipient.toString() === userId) {
      message.deletedByRecipient = true;
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    // Hard delete if both parties deleted
    if (message.deletedBySender && message.deletedByRecipient) {
      await message.deleteOne();
    } else {
      await message.save();
    }

    res.json({ success: true, message: 'Message deleted' });
  } catch (err) {
    next(err);
  }
};

// @desc    Get unread count
// @route   GET /api/messages/unread-count
const getUnreadCount = async (req, res, next) => {
  try {
    const count = await Message.countDocuments({
      recipient: req.user._id,
      readAt: null,
      deletedByRecipient: false,
    });
    res.json({ success: true, count });
  } catch (err) {
    next(err);
  }
};

module.exports = { sendMessage, getInbox, getSent, getMessage, deleteMessage, getUnreadCount };
