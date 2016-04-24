import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DynamicButtonsColorChanger from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('DynamicButtonsColorChanger', module)
  .add('one color', () => (
    <Container controller={controller}>
      <DynamicButtonsColorChanger buttonColors={[
        {$ref: 0, color: 'black'},
      ]}
      />
    </Container>
  ))
  .add('two colors', () => (
    <Container controller={controller}>
      <DynamicButtonsColorChanger buttonColors={[
        {$ref: 0, color: 'black'},
        {$ref: 1, color: 'red'},
      ]}
      />
    </Container>
  ))
;
