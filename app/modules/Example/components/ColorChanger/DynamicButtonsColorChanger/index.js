import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ButtonColorChanger from '../ButtonColorChanger';
import _ from 'lodash';
// import styles from './styles.css';

@Cerebral({
  buttonColors: ['example', 'buttonColors'],
})
class DynamicButtonsColorChanger extends React.Component {
  static propTypes = {
    buttonColors: PropTypes.object,
    signals: PropTypes.object,
  };

  renderButton(colorObj, index) {
    return (
      <ButtonColorChanger
        key={index}
        index={index}
        $ref={colorObj.$ref}
        toColor={colorObj.color}
      />
    );
  }

  render() {
    return (
      <div>
        {_.map(this.props.buttonColors, this.renderButton.bind(this))}
      </div>
    );
  }
}

export default DynamicButtonsColorChanger;
