const connection = require("../database/connection");
const express = require('express');
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.get('/highlights', TaskController.visualizarDestaques);
router.get('/lastnews/:offset&:limit', TaskController.visualizarUltimosPosts);
router.get('/topviews', TaskController.visualizarTopViews);
router.get('/lastreviews', TaskController.visualizarUltimosReviews);
router.get('/post/:id', TaskController.visualizarPost);
router.get('/relatedposts/:id', TaskController.visualizarPostsRelacionados);

module.exports = router