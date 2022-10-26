const express = require("express");
const Message = require("../models/messageModel");

const router = express.Router();

router.post("/add-message", async (req, res) => {
	try {
		const message = await Message.create(req.body);
		res.send(message);
	} catch (error) {
		console.log(error);
	}
});

router.get("/messages", async (req, res) => {
	try {
		const messages = await Message.findAll();
		if (messages) res.send(messages);
		else res.send([]);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
