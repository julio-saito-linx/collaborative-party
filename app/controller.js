import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Example from './modules/Example';
import NewSum from './modules/NewSum';
import Router from 'cerebral-module-router';
import Devtools from 'cerebral-module-devtools';

const controller = Controller(Model({}));

controller.addModules({
  example: Example(),
  newSum: NewSum(),
  devtools: Devtools(),
  router: Router({
    '/': 'example.redirectRoot',
    '/sum': 'newSum.clearFields',
    '/:color': 'example.colorChanged',
  }, {
    onlyHash: false,
  }),
});

export default controller;
