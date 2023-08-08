const connection = require("../database/connection");
const express = require('express');
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.get('/highlights', TaskController.visualizarDestaques);
router.get('/lastnews', TaskController.visualizarPosts);
router.get('/news/:id', TaskController.visualizarPost);

module.exports = router