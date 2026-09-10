import express from 'express';
import mongoose from 'mongoose';
import Project from '../models/Project.js';
import ContactMessage from '../models/ContactMessage.js';
import { initialProjects } from '../config/db.js';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'offline-resilient'
  });
});

// Get all projects, sorted by order
router.get('/projects', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const projects = await Project.find().sort({ order: 1 });
      return res.json(projects);
    }
    // Resilient offline fallback with verified case studies
    res.set('X-Data-Source', 'local-seeded');
    return res.json(initialProjects);
  } catch (error) {
    // If query fails, fall back to seeded case studies
    res.set('X-Data-Source', 'local-seeded-fallback');
    return res.json(initialProjects);
  }
});

// Save contact form message
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Simple server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide all required fields: name, email, and message.' });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }
    
    if (mongoose.connection.readyState === 1) {
      const contactMessage = new ContactMessage({ name, email, message });
      await contactMessage.save();
    } else {
      console.log(`[Contact Form Received - Offline Seed Mode]: from ${name} (${email}): ${message}`);
    }
    
    res.status(201).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error: error.message });
  }
});

export default router;
