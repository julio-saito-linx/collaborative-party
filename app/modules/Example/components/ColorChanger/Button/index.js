import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import buttonStyles from '../../styles/button-style.css';

@Cerebral()
class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    onClickButton: React.PropTypes.func.isRequired,
    signals: PropTypes.object,
  };
  render() {
    return (
      <button
        className={`${buttonStyles.btn} ${buttonStyles['btn-default']} ${buttonStyles['btn-margin']}`}
        onClick={_ => this.props.onClickButton()}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
