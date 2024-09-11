const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/feedback");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/users",router)


mongoose.connect("mongodb://localhost:27017/feedbackDB")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(3000);
})
.catch((err) => console.log((err)));
