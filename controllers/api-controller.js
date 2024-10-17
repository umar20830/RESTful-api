const userModel = require("../models/user-model");

module.exports.getUserData = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    }
    catch (err) {
        res.json({ error: err.message });
    }
}


module.exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.create({
            username,
            email,
            password
        })
        res.json(user);
    }
    catch (err) {
        res.json({ error: err.message });
    }
}


module.exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            {
                email: req.params.email
            }, {
            username: req.body.username
        }, {
            new: true
        }
        )
        res.json(updatedUser);
    }
    catch (err) {
        res.json({ error: err.message });
    }
}


module.exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findOneAndDelete(req.params.email)
        res.json(deletedUser);
    }
    catch (err) {
        res.json({ error: err.message });
    }
}