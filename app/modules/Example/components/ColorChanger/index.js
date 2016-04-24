import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Title from './Title';
import ButtonColorChanger from './ButtonColorChanger';
import DynamicButtonsColorChanger from './DynamicButtonsColorChanger';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
  buttonColors: ['example', 'buttonColors'],
})
class ColorChanger extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    buttonColors: PropTypes.any,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <DynamicButtonsColorChanger />
      </div>
      // this.props.buttonColors
    );
  }
}

export default ColorChanger;
