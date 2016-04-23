import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import ColorChanger from './components/ColorChanger';
import SimpleInput from './components/SimpleInput';
import controller from './controller.js';

ReactDOM.render(<div>
  <Container controller={controller}>
    <ColorChanger />
    <hr />
    <SimpleInput labelText="Number 1" />
    <SimpleInput labelText="Number 2" />
    <SimpleInput labelText="Result" />
  </Container>
</div>,
  document.getElementById('root'));
