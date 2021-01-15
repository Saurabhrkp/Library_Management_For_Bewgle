const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  available: { type: Boolean, default: true },
  coverImage: { type: String, required: true },
  coverImageID: { type: String, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
