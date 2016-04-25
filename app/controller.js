import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Example from './modules/Example';
import Router from 'cerebral-module-router';
import Devtools from 'cerebral-module-devtools';
import Refs from './modules/Refs';

const controller = Controller(Model({}));

controller.addModules({
  example: Example(),
  devtools: Devtools(),
  router: Router({
    '/': 'example.redirectRoot',
    '/:color': 'example.colorChanged',
  }, {
    onlyHash: true,
  }),
  refs: Refs(),
});

export default controller;
