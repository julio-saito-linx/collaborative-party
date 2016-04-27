import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import controller from './controller.js';
import Main from './modules/Example/components/Main';

ReactDOM.render(<div>
  <Container controller={controller}>
    <Main />
  </Container>
</div>,
  document.getElementById('root'));
