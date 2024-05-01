//its bring the method router from express
const router = require("express").Router();
const html = require("./html");
const api = require("./api");

//telling it to used
router.use("/", html)
router.use("/api", api)

//taking what I used and sending it out 
module.exports = router
