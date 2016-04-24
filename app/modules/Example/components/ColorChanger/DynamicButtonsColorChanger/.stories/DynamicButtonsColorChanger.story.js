import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DynamicButtonsColorChanger from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('DynamicButtonsColorChanger', module)
  .add('no colors', () => (
    <Container controller={controller}>
      <DynamicButtonsColorChanger />
    </Container>
  ))
  .add('two colors', () => (
    <Container controller={controller}>
      <DynamicButtonsColorChanger buttonColors={['black', 'blue']}/>
    </Container>
  ))
;
