const express = require('express');
const routes = express.Router();
const SecurityController = require('./Controller/SecurityController');

routes.get('/usuario', SecurityController.list);
routes.post('/usuario', SecurityController.cadastrar);
routes.post('/auth', SecurityController.auth)

module.exports = routes;