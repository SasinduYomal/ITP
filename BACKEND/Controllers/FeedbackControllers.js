const User = require('../Model/FeedbackModel');  // Adjust the path if necessary


//display
const getAllUsers = async (req, res, next) => {
    let Users;

    try{
        users = await User.find();
    }catch(err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"User Not Found"});
    }
    return res.status(200).json({ users});
};

//insert data

const addUsers = async (req, res, next) => {
    const { name, email, rating, comment } = req.body;

    let users;

    try {
        users = new User({ name, email, rating, comment });
        await users.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to add feedback" });
    }

    if (!users) {
        return res.status(404).json({ message: "Unable to add feedback" });
    }
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
exports.addFeedback = addUsers;