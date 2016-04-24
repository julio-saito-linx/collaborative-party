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
    signals: PropTypes.object,
  };
  render() {
    return (
      <button
        className={styles.buttonClass}
        onClick={() => this.props.signals.example.colorChanged({color: 'red'})}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
