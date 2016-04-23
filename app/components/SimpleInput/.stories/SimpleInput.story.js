import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SimpleInput from '..';

import {Container} from 'cerebral-view-react';
import controller from '../../../controller.js';

storiesOf('SimpleInput', module)
  .add('no props', () => (
    <Container controller={controller}>
      <SimpleInput />
    </Container>
  ))
  .add('labelText="Label"', () => (
    <Container controller={controller}>
      <SimpleInput
        labelText="Label"
      />
    </Container>
  ))
  .add('valueText="Title"', () => (
    <Container controller={controller}>
      <SimpleInput
        valueText="Title"
      />
    </Container>
  ))
  .add('labelText="Label" && valueText="Title"', () => (
    <Container controller={controller}>
      <SimpleInput
        labelText="Label"
        valueText="Title"
      />
    </Container>
  ))
  ;
