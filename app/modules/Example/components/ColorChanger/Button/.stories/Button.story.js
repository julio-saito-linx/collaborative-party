import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('Button', module)
  .add('empty', () => (
    <Container controller={controller}>
      <Button />
    </Container>
  ))
  .add('Hello', () => (
    <Container controller={controller}>
      <Button>Hello</Button>
    </Container>
  ))
  .add('Hello onClickButton', () => (
    <Container controller={controller}>
      <Button onClickButton={_ => console.log('Hello')}>Hello</Button>
    </Container>
  ))
;
