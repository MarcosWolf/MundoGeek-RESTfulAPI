const connection = require("../database/connection");
const express = require('express');
const router = express.Router();
const TaskController = require("../controllers/TaskController");

//Get
router.get('/highlights', TaskController.visualizarDestaques);
router.get('/lastnews/:offset&:limit/:tagID?', TaskController.visualizarUltimosPosts);
router.get('/topviews', TaskController.visualizarTopViews);
router.get('/lastreviews', TaskController.visualizarUltimosReviews);
router.get('/post/:id', TaskController.visualizarPost);
router.get('/tags/:id', TaskController.visualizarTags);
router.get('/tag/:id/:offset&:limit', TaskController.visualizarTagPosts);
router.get('/tagname/:id', TaskController.visualizarTagNome);
router.get('/relatedposts/:id', TaskController.visualizarPostsRelacionados);

//Post
router.post('/:id/views/', TaskController.registrarVisualizacao);

module.exports = router