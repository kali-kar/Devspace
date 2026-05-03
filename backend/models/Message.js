const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters'],
  },
  body: {
    type: String,
    required: [true, 'Message body is required'],
    maxlength: [5000, 'Message cannot exceed 5000 characters'],
  },
  readAt:   { type: Date, default: null },
  deletedBySender:    { type: Boolean, default: false },
  deletedByRecipient: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
