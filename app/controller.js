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
    '/pages/home': 'example.homepageLoaded',
    '/*': 'example.notFoundLoaded',
  }, {
    onlyHash: true,
  }),
  // Can pass any default options which
  // will be used on all requests
  http: Http({
    // baseUrl: '/api'
  }),
});

export default controller;
