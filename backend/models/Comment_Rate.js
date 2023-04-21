const mongoose = require("mongoose");

const Comment_rateSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, ref: "Readers " },
  book_id: { type: mongoose.Types.ObjectId, ref: "Books" },
  name: { type: String },
  comments: [
    {
      comment: { type: String },
    },
  ],
  rate: { type: Number },
});
module.exports = mongoose.model("Comment_Rate", Comment_rateSchema);
