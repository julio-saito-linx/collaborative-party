import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Example from './modules/Example';
import Router from 'cerebral-module-router';
import Devtools from 'cerebral-module-devtools';
import Http from 'cerebral-module-http';

const controller = Controller(Model({}));

controller.addModules({
  example: Example(),
  devtools: Devtools(),
  router: Router({
    '/': 'example.redirectHome',
    '/phone-list': 'example.homepageLoaded',
    '/login': 'example.loginLoaded',
    '/signIn': 'example.signInLoaded',
    '/*': 'example.notFoundLoaded',
  }, {
    onlyHash: true,
  }),
  http: Http(),
});

export default controller;
