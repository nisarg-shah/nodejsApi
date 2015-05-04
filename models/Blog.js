var mongoose = require('mongoose');

// Create the MovieSchema.
var BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = BlogSchema;