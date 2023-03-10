'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/template', controller.template.index);
  router.post('/abc', controller.template.abc);
};
