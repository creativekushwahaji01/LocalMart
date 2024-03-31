const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
//   imgUrl: {
//     type: String, // Assuming the image URL will be a string
//     required: true // You can adjust this based on your requirements
//   }
  // Add more fields as needed
});

// Create a Product model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
