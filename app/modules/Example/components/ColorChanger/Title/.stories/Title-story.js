import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Title from '..';

storiesOf('Title', module)
  .add('no children', () => (
    <Title />
  ))
  .add('with children', () => (
    <Title>with children</Title>
  ))
  .add('pre children', () => (
    <Title><pre>i'm a pre tag</pre></Title>
  ))
  .add('color red', () => (
    <Title color="red">color red</Title>
  ));
