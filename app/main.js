import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import ColorChanger from './components/ColorChanger';
import controller from './controller.js';

ReactDOM.render(<div>
  <Container controller={controller}>
    <ColorChanger />
  </Container>
</div>,
  document.getElementById('root'));
