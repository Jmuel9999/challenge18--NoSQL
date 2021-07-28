const router = require('express').Router();
const { User } = require('../../models/User');

const {
  getUsers,
  getUser,
  newUser,
  deleteUser
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getUsers)
  .post(newUser);

router
  .route('/:id')
  .get(getUser)
  .delete(deleteUser);  

module.exports = router;