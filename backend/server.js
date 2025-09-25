import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Blog from './models/item.js';

import connectDB from './db.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: true, // Allow all origins for testing
  credentials: true
}));

// Health check route (before DB connection)
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Additional debug route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Connect to database (with error handling)
connectDB().catch(err => {
  console.error('Database connection failed:', err.message);
  // Don't exit the process, let the server continue running
});

app.post('/api/blogs', async (req, res) => {
    const { id, title, body } = req.body;

    try {
        const newBlog = new Blog({ id, title, body });
        await newBlog.save();
        res.status(201).json({ message: "Blog saved successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save blog" });
    }
});

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));