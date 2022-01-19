const express = require('express');
const { getBirds, postBird } = require('../controller');

const router = express.Router();

router.get('/birds', getBirds);
router.post('/birds', postBird);

module.exports = router;
