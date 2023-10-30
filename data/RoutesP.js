const express = require('express');
const router = express.Router();
const Checkout = require('./modules/modelP'); // Import your Mongoose model

// Define a route to save the checkout details
router.post('/checkout', async (req, res) => {
  try {
    console.log("Hi");
    const formData = req.body;
    const newCheckout = new Checkout(formData);
    const savedCheckout = await newCheckout.save();
    res.status(201).json(savedCheckout);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
});

module.exports = router;