import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ButtonColorChanger from '../ButtonColorChanger';
import styles from './styles.css';

@Cerebral({
  buttonColors: ['example', 'buttonColors'],
})
class DynamicButtonsColorChanger extends React.Component {
  static propTypes = {
    buttonColors: PropTypes.any,
    signals: PropTypes.object,
  };
  renderButton(color, index) {
    return (
      <ButtonColorChanger
        key={index}
        index={index}
        toColor={color}
      />
    );
  }
  render() {
    return (
      <div>
        {this.props.buttonColors.map(this.renderButton.bind(this))}
      </div>
    );
  }
}

export default DynamicButtonsColorChanger;
