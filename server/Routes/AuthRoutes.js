const { register, login, getUsers } = require("../Controllers/AuthControllers");

const router = require("express").Router();

router.post("/")
router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers);

module.exports = router;