'use strict';

const express = require('express');
const RetrospectiveController = require('./retrospective.controller');
const router = express.Router();

router.post('/', RetrospectiveController.createRetrospective);
router.get('/', RetrospectiveController.getAllRetrospectives);

module.exports = router;
