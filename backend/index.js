const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/localmart";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

// Product model
const Product = require('./Product');

// Route to add a product
app.post('/products', async (req, res) => {
  try {
    // Create a new product based on the data sent from the frontend
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      // Add more fields as needed
    });

    // Save the new product to the database
    await newProduct.save();

    res.status(201).json({ success: true, message: 'Product added successfully' });
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ success: false, message: 'Failed to add product' });
  }
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
