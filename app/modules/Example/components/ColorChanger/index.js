import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Title from './Title';
import Button from './Button';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
})
class ColorChanger extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <Button toColor="black" />
        <Button toColor="red" />
        <Button toColor="blue" />
      </div>
    );
  }
}

export default ColorChanger;
