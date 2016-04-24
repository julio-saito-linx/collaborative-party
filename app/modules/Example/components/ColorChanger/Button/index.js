import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  // title: ['example', 'title'],
  // color: ['example', 'color'],
})
class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
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
    return `${styles.btn} ${styles['btn-default']} ${styles['btn-margin']}`;
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

export default Button;
