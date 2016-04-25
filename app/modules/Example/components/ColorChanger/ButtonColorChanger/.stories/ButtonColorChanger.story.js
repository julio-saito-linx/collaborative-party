import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ButtonColorChanger from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('ButtonColorChanger', module)
  .add('no children', () => (
    <Container controller={controller}>
      <ButtonColorChanger />
    </Container>
  ))
  .add('with children', () => (
    <Container controller={controller}>
      <ButtonColorChanger>with children</ButtonColorChanger>
    </Container>
  ))
  .add('pre children', () => (
    <Container controller={controller}>
      <ButtonColorChanger><pre>i'm a pre tag</pre></ButtonColorChanger>
    </Container>
  ))
  .add('toColor', () => (
    <Container controller={controller}>
      <ButtonColorChanger toColor={[120, 30, 30]}>120, 30, 30</ButtonColorChanger>
    </Container>
  ))
  .add('toColor only', () => (
    <Container controller={controller}>
      <ButtonColorChanger toColor={[120, 30, 30]} />
    </Container>
  ))
  .add('toColor selected', () => (
    <Container controller={controller}>
      <ButtonColorChanger toColor={[120, 30, 30]} selectedColor={[120, 30, 30]}/>
    </Container>
  ))
;
