import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Title from '..';

storiesOf('Title', module)
  .add('with text', () => (
    <Title>Hello</Title>
  ))
  .add('with no text', () => (
    <button></button>
  ));
