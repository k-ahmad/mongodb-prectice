var express = require('express');
var router = express.Router();

const { registerUser, getUsers, getUserById } = require('../controllers/userControllers');

router.post("/", registerUser);
router.get("/", getUsers);
router.get('/:id', getUserById);

module.exports = router;
