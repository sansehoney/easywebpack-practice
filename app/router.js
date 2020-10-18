'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  app.get('/', app.controller.home.server);
  app.get('/client', app.controller.home.client);
};
