const router = require('express').Router();
const { User } = require('../../models/User');

// get all users
router.get('/', (req,res) => {
    Users.findAll({
    })
    .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  })

// get single user


// post a new user