const { User } = require('../models');

const userController = {
    // get all users
    getUsers(req, res) {
        console.log("route")
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => {
                console.error(err)
                res.status(400).json(err);
            })
        },
    // get only one user
    getUser({params}, res) {
        User.findOne({ _id: params.id })
            .then(userData => {
                if(!userData) {
                    res.status(404).json({ message: 'No user found with this id!'})
                }
                res.json(userData)
            })
            .catch(err => {
                res.status(400).json(err);
            })
        },
    // creates a user
    newUser({body}, res) {
        User.create(body)
            .then(userData => res.json(userData))
            .catch(err => {
                res.status(400).json(err);
            })
        },
    // deletes a user
    deleteUser({params}, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(userData => {
                if(!userData) {
                    res.status(404).json({ message: 'No user found with this id!'})
                }
                res.json(userData)
            })
        }
}

module.exports = userController;