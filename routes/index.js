
const user_data = require("../controllers/user_data")

const express = require('express');
const router = express.Router();
router.get("/get_data",user_data.get_data);
router.post("/insert_data",user_data.insert_data);
module.exports = router;