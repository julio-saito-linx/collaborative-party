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
    selectedColor: PropTypes.string,
    title: PropTypes.string,
    buttonColors: PropTypes.any,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Title titleColor={this.props.selectedColor}>{this.props.title}</Title>
        <DynamicButtonsColorChanger />
        <button onClick={_ => this.props.signals.example.addMoreColorsClicked()}>add more</button>
      </div>
      // this.props.buttonColors
    );
  }
}

export default ColorChanger;
