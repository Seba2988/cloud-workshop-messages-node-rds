const express = require("express");
const Message = require("../models/messageModel");

const router = express.Router();

router.post("/add-message", async (req, res) => {
	const message = new Message(req.body);
	try {
		await message.save();
		res.send(message);
	} catch (error) {
		console.log(error);
	}
});

router.get("/messages", async (req, res) => {
	try {
		const messages = await Message.find({});
		if (messages) res.send(messages);
		else res.send([]);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
