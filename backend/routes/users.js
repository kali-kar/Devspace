const express = require('express');
const router  = express.Router();
const { protect } = require('../middleware/auth');
const { getProfile, updateProfile, searchUsers, getUsers } = require('../controllers/userController');

router.get('/',           getUsers);
router.get('/search',     searchUsers);
router.put('/profile',    protect, updateProfile);
router.get('/:username',  getProfile);

module.exports = router;
