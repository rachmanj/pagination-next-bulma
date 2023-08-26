const express = require("express");
const { getUsers } = require("../controllers/userController");

const router = express.Router();

/* GET users listing. */
router.get("/", getUsers);

module.exports = router;
