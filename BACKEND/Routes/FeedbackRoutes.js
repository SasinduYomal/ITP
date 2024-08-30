const express = require("express");
const router = express.Router();
const User = require("../Model/FeedbackModel");
const FeedbackController = require("../Controllers/FeedbackControllers") 

router.get("/",FeedbackController.getAllUsers);
router.post("/",FeedbackController.addUsers);

module.exports = router;