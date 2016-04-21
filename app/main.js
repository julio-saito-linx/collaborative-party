import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Devtools from 'cerebral-module-devtools';
import Example from './modules/Example';
import ColorChanger from '../domain/app/components/ColorChanger';
import Toggle from '../domain/app/components/Toggle/Toggle';

const controller = Controller(Model({}));

controller.addModules({
  example: Example(),
  devtools: Devtools(),
  router: Router({
    '/': 'example.redirectRoot',
    '/:color': 'example.colorChanged',
  }, {
    onlyHash: false,
  }),
});

function onToggleClick() {
  /**/ console.log('arguments:', arguments); /* -debug- */
}

ReactDOM.render(<div>
  <Container controller={controller}>
    <Toggle onToggle={onToggleClick}>Toggle</Toggle>
    <ColorChanger />
  </Container>
</div>,
  document.getElementById('root'));
