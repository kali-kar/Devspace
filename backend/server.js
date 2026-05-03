const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Static files for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth',     require('./routes/auth'));
app.use('/api/users',    require('./routes/users'));
app.use('/api/blogs',    require('./routes/blogs'));
app.use('/api/messages', require('./routes/messages'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'DevSpace API is running' }));

// Error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 DevSpace server running on port ${PORT}`);
});
