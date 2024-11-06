// backend/routes/topicRoutes.js
const express = require('express');
const topicController = require('../controllers/topicController');

const router = express.Router();

router.get('/', topicController.getAllTopics);
router.get('/:id', topicController.getTopicsById);

module.exports = router;
