var express = require("express");
var router = express.Router();

const { registerUser, getUsers, getUserById, updateUser, deleteUser,} = require("../controllers/userControllers");

router.post("/", registerUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
