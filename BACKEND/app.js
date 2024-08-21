const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use("/",(req, res, next) => {
    res.send("It is Working");
})

mongoose.connect("mongodb+srv://Yomal:ltLAEygebCCBKNrQ@marketing.ehiwl.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));