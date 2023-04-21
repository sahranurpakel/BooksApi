const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});
module.exports = mongoose.model("Publisher", PublisherSchema);
