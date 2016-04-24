import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import buttonStyles from '../../styles/button-style.css';

@Cerebral()
class AddColorButton extends React.Component {
  static propTypes = {
    buttonColors: PropTypes.any,
    signals: PropTypes.object,
  };
  render() {
    return (
      <button
        className={`${buttonStyles.btn} ${buttonStyles['btn-default']} ${buttonStyles['btn-margin']}`}
        onClick={_ => this.props.signals.example.addMoreColorsClicked()}
      >
        Add New Color
      </button>
    );
  }
}

export default AddColorButton;
