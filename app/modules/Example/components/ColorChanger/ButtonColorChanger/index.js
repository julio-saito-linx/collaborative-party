import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import buttonStyles from '../../styles/button-style.css';
import styles from './styles.css';
import _ from 'lodash';
import { arrayToRgba } from '../../../utils';

@Cerebral({
  selectedColor: ['example', 'selectedColor'],
})
class ButtonColorChanger extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    selectedColor: PropTypes.array,
    toColor: PropTypes.array,
    $ref: PropTypes.number,
    signals: PropTypes.object,
  };

  getChildren() {
    if (this.props.children) {
      return this.props.children;
    }
    return this.props.toColor.join(', ');
  }

  isSelected() {
    return _.isEqual(this.props.selectedColor, this.props.toColor);
  }

  buttonCss() {
    const css = [
      buttonStyles.btn,
      buttonStyles['btn-default'],
      buttonStyles['btn-margin'],
      styles['btn-color'],
    ];
    if (this.isSelected()) {
      css.push(styles['btn-selected']);
    }
    return css.join(' ');
  }

  buttonRemoveCss() {
    const css = [
      buttonStyles.btn,
      styles['btn-remove'],
      // buttonStyles['btn-default'],
    ];
    return css.join(' ');
  }

  divStyle() {
    if (this.isSelected()) {
      return {backgroundColor: arrayToRgba(this.props.toColor, 0.5)};
    }
    return null;
  }

  render() {
    return (
      <div
        className={styles['color-change-box']}
        style={this.divStyle()}
      >
        <div className={styles['remove-container']}>
          <button
            className={this.buttonRemoveCss()}
            onClick={() => this.props.signals.example.removeItemClicked({
              ref: this.props.$ref,
            })}
          >
          X
          </button>
        </div>

        <button
          style={{backgroundColor: arrayToRgba(this.props.toColor, 1)}}
          className={this.buttonCss()}
          onClick={() => this.props.signals.example.colorChanged({
            color: this.props.toColor.join('-'),
          })}
        >
        {this.isSelected() ? 'SELECTED' : ''}
        </button>
        <div className={styles['color-change-box-label']}>
          {this.getChildren()}
        </div>
      </div>
    );
  }
}

export default ButtonColorChanger;
