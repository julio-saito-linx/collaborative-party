import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Title from './Title';
import DynamicButtonsColorChanger from './DynamicButtonsColorChanger';

@Cerebral({
  title: ['example', 'title'],
  selectedColor: ['example', 'selectedColor'],
  buttonColors: ['example', 'buttonColors'],
})
class ColorChanger extends React.Component {
  static propTypes = {
    selectedColor: PropTypes.object,
    title: PropTypes.string,
    buttonColors: PropTypes.any,
    signals: PropTypes.object,
  };

  getTitleColor() {
    if (this.props.selectedColor) {
      return this.props.selectedColor.color;
    }
    return 'black';
  }

  render() {
    return (
      <div>
        <Title titleColor={this.getTitleColor()}>{this.props.title}</Title>
        <DynamicButtonsColorChanger />
        <button onClick={_ => this.props.signals.example.addMoreColorsClicked()}>add more</button>
      </div>
      // this.props.buttonColors
    );
  }
}

export default ColorChanger;
