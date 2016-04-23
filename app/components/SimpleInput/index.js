import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  labelText: ['example', 'labelText'],
  valueText: ['example', 'valueText'],
})
class SimpleInput extends React.Component {

  static propTypes = {
    labelText: PropTypes.string,
    valueText: PropTypes.string,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <label className={styles.label}>{this.props.labelText}</label>
        <input
          type="text"
          className={styles.input}
          value={this.props.valueText}
        />
      </div>
    );
  }
}

export default SimpleInput;
