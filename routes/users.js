var express = require('express');
var router = express.Router();

const { registerUser } = require('../controllers/userControllers');

router.post("/", registerUser);
module.exports = router;
