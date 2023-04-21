const mongoose = require("mongoose");

const ReadersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String },
  description: { type: String },
  books_id: [{ type: mongoose.Types.ObjectId, ref: "Books" }],
});
module.exports = mongoose.model("Readers", ReadersSchema);
