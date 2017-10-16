'use strict';

const retrospectiveRoutes = require('../retrospective/retrospective.route');

function routes (app) {
  app.use('/retrospectives', retrospectiveRoutes);
  app.use((err, req, res, next) => {
    res.send({
      error: {
        title: err.title,
        description: err.message
      } });
    res.status(err.status || 500);
    next();
  });
}

module.exports = { routes };
