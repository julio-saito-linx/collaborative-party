import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Title from './Title';
import DynamicButtonsColorChanger from './DynamicButtonsColorChanger';
import AddColorButton from './AddColorButton';
import Button from './Button';
import { Col, Row } from 'material-components';
import { Calendar } from 'material-components';
import { Checkbox } from 'material-components';
@Cerebral({
  title: ['example', 'title'],
  selectedColor: ['example', 'selectedColor'],
  buttonColors: ['example', 'buttonColors'],
})
class ColorChanger extends React.Component {
  static propTypes = {
    selectedColor: PropTypes.array,
    title: PropTypes.string,
    buttonColors: PropTypes.object,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Title titleColor={this.props.selectedColor}>{this.props.title}</Title>
        <AddColorButton />
        <Button onClickButton={_ => this.props.signals.example.removeAllItemsClicked()}>
          Remove all Colors
        </Button>
        <hr/>
        <DynamicButtonsColorChanger />
        <Row>
          <Col type="md-5 md-offset-1">
            <Checkbox label="Checkbox"/>
           </Col>
          <Col type="md-5">t2</Col>
        </Row>
      </div>
    );
  }
}

export default ColorChanger;
