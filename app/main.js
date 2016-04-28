import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import controller from './controller.js';
import Main from './modules/Example/components/Main';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(<div>
  <Container controller={controller}>
    <Main />
  </Container>
</div>,
  document.getElementById('root'));
