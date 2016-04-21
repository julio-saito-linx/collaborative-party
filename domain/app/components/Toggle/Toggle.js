import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral({
  toggled: ['example', 'toggled'],
})
class Toggle extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     toggledOn: props.initialToggledOn || false,
  //   };
  // }
  // handleToggleClick() {
  //   const toggledOn = !this.state.toggledOn;
  //   this.props.onToggle(toggledOn);
  //   this.setState({toggledOn});
  // }
  render() {
    const signals = this.props.signals.example;
    return (
      <div className={`toggle ${this.props.toggled}`}>
        <button
          onClick={() => signals.toggledChanged()}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

Toggle.propTypes = {
  toggled: PropTypes.boolean,
  children: PropTypes.any,
  signals: PropTypes.object,
};

export default Toggle;
