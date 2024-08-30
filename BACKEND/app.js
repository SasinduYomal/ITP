const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/FeedbackRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/users",router)


mongoose.connect("mongodb+srv://admin:7q6qRfNmSPNwsJSn@itp.k4rds.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
