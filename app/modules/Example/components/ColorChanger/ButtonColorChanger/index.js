import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import buttonStyles from '../../styles/button-style.css';

@Cerebral({
  selectedColor: ['example', 'selectedColor'],
})
class ButtonColorChanger extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    selectedColor: PropTypes.string,
    toColor: PropTypes.string,
    $ref: PropTypes.number,
    signals: PropTypes.object,
  };
  getChildren() {
    if (this.props.children) {
      return this.props.children;
    }
    return this.props.toColor;
  }
  getCssClass() {
    const css = `${buttonStyles.btn} ${buttonStyles['btn-default']} ${buttonStyles['btn-margin']}`;
    if (this.props.selectedColor === this.props.toColor) {
      return `${css} ${buttonStyles['btn-selected']}`;
    }
    return css;
  }
  render() {
    return (
      <button
        style={{color: this.props.toColor}}
        className={this.getCssClass()}
        key={this.props.$ref}
        onClick={() => this.props.signals.example.colorChanged({
          $ref: this.props.$ref,
          color: this.props.toColor,
        })}
      >
        {this.getChildren()}
      </button>
    );
  }
}

export default ButtonColorChanger;
