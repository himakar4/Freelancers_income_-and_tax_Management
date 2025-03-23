const express = require('express');
const { createClient, getClients } = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createClient);
router.get('/', authMiddleware, getClients);

module.exports = router;
