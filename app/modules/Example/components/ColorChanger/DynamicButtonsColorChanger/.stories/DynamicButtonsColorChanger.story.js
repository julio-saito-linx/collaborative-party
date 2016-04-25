import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DynamicButtonsColorChanger from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('DynamicButtonsColorChanger', module)
  .add('one color', () => (
    <Container controller={controller}>
      <DynamicButtonsColorChanger buttonColors={{
        '0': {$ref: 0, color: [0, 0, 0]},
      }}
      />
    </Container>
  ))
  .add('two colors', () => (
    <Container controller={controller}>
      <DynamicButtonsColorChanger buttonColors={{
        '1': {$ref: 1, color: [0, 0, 0]},
        '2': {$ref: 2, color: [255, 0, 0]}
      }}
      />
    </Container>
  ))
;
