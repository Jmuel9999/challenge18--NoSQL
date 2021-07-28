const router = require('express').Router();
const { User } = require('../../models/Thought');

const {
  getThoughts,
  getThought,
  newThought,
  updateThought,
  deleteThought  
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getThoughts)
  .post(newThought);

router
  .route('/:id')
  .get(getThought)
  .delete(deleteThought);  

module.exports = router;