import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  selectedColor: ['example', 'selectedColor'],
})
class ButtonColorChanger extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    selectedColor: PropTypes.object,
    toColor: PropTypes.string,
    signals: PropTypes.object,
  };
  getChildren() {
    if (this.props.children) {
      return this.props.children;
    }
    return this.props.toColor;
  }
  getCssClass() {
    const css = `${styles.btn} ${styles['btn-default']} ${styles['btn-margin']}`;
    if (this.props.selectedColor.color === this.props.toColor) {
      return `${css} ${styles['btn-selected']}`;
    }
    return css;
  }
  render() {
    return (
      <button
        style={{color: this.props.toColor}}
        className={this.getCssClass()}
        onClick={() => this.props.signals.example.colorChanged({color: this.props.toColor})}
      >
        {this.getChildren()}
      </button>
    );
  }
}

export default ButtonColorChanger;
