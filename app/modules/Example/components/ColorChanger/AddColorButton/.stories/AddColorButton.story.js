import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AddColorButton from '..';
import {Container} from 'cerebral-view-react';
import controller from '../../../../../../controller.js';

storiesOf('AddColorButton', module)
  .add('add color button', () => (
    <Container controller={controller}>
      <AddColorButton />
    </Container>
  ))
;
