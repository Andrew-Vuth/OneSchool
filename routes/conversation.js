const express = require("express");
const router = express.Router();

const Conversation = require("../models/Conversation");

const auth = require("../middleware/auth");

// @route     POST api/conversation
// @desc      Create a new conversation
// @access    Private

router.post("/", auth, async (req, res) => {
  const { senderId, recieverId } = req.body;
  const newConversation = new Conversation({
    members: [senderId, recieverId],
  });
  try {
    await newConversation.save();
    res.json({ newConversation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error!" });
  }
});
// @route     GET api/conversation
// @desc      Get a Conversation
// @access    Private

router.get("/", auth, async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [req.user.id] },
    });
    if (!conversations)
      return res.status(401).json({ msg: "Conversation does not exisit!" });

    res.json({ conversations });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error!" });
  }
});

module.exports = router;
