import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import ColorChanger from './components/ColorChanger';
import controller from './controller.js';
// import NewSum from './components/NewSum';

ReactDOM.render(<div>
  <Container controller={controller}>
    <ColorChanger />
  </Container>
</div>,
  document.getElementById('root'));
