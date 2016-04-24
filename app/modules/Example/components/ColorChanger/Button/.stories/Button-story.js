import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('Button', module)
  .add('no children', () => (
    <Container controller={controller}>
      <Button />
    </Container>
  ))
  .add('with children', () => (
    <Container controller={controller}>
      <Button>with children</Button>
    </Container>
  ))
  .add('pre children', () => (
    <Container controller={controller}>
      <Button><pre>i'm a pre tag</pre></Button>
    </Container>
  ))
;
