import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ColorChanger from '..';

import {Container} from 'cerebral-view-react';
import controller from '../../../controller.js';

storiesOf('ColorChanger', module)
  .add('no title, no color', () => (
    <Container controller={controller}>
      <ColorChanger />
    </Container>
  ))
  .add('title="Title"', () => (
    <Container controller={controller}>
      <ColorChanger
        title="Title"
      />
    </Container>
  ))
  .add('title="Title" color="green"', () => (
    <Container controller={controller}>
      <ColorChanger
        title="Title"
        color="green"
      />
    </Container>
  ))
  ;
