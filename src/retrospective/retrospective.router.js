'use strict';

const express = require('express');
const RetrospectiveController = require('./retrospective.controller');
const router = express.Router();

router.post('/', RetrospectiveController.createRetrospective);

module.exports = router;
