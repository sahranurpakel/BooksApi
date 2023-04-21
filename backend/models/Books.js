const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  page: { type: Number, required: true },
  author: { type: String, required: true },
  publisher_id: { type: mongoose.Types.ObjectId, ref: "Publisher" },
});
module.exports = mongoose.model("Books", BooksSchema);
