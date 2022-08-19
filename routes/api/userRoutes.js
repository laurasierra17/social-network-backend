const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController');

// Returns a list of all user and creates a new user
router.route('/').get(getUsers).post(createUser);

// Gets, updates, and deletes a single user based on their id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Handles the creation and deletion of a friend associated with a user
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;