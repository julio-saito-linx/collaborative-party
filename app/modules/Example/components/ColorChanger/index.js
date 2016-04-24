import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Title from './Title';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color'],
})
class ColorChanger extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <button onClick={() => this.props.signals.example.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => this.props.signals.example.colorChanged({color: 'blue'})}>Blue</button>
        {' | '}
        <button onClick={() => this.props.signals.example.colorChanged({color: 'black'})}>Black</button>
      </div>
    );
  }
}

export default ColorChanger;
