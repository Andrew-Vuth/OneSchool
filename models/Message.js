const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
