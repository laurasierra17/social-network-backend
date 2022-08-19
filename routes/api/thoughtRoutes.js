const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction } = require('../../controllers/thoughtController');

// Handles getting the list of thoughts and creating a new thought
router.route('/').get(getThoughts).post(createThought);

// Handles getting, updating, and deleting a thought based on the idea in the parameters
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Create a new reaction for a specific thought
router.route('/:thoughtId/reactions').post(createReaction);

// Delete a reaction associated to a thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;