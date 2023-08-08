const connection = require("../database/connection");
const express = require('express');
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.get('/lastnews', TaskController.visualizarPosts);

module.exports = router