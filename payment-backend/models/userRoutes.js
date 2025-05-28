const express = require('express');
const router = express.Router();
const User = require('../models/User'); // adjust if path differs

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Validate fields
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists with this email' });
    }

    // Create and save new user
    const newUser = new User({ name, email, password, phone });
    await newUser.save();

    res.status(201).json({ message: '✅ User created successfully' });
  } catch (error) {
    console.error('❌ Error in signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare plain password (⚠️ not secure, just temporary)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: '✅ Login successful',email: "user@example.com", user });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
// GET profile
router.get('/api/profile', async (req, res) => {
  const { email } = req.query;
  
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
