import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

import {
  TextField,
  RaisedButton,
} from 'material-ui';

//
// component
//
@Cerebral({
  logInError: ['example', 'logInUser', 'loginError'],
})
class LogIn extends React.Component {
  static propTypes = {
    logInError: PropTypes.string,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          // errorText="This field is required"
          onChange={event => this.props.signals.example.logInUserChanged({
            fieldName: 'email',
            value: event.target.value,
          })}
        /><br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          // errorText="This field is required"
          onChange={event => this.props.signals.example.logInUserChanged({
            fieldName: 'password',
            value: event.target.value,
          })}
        /><br/>
        <span style={{color: 'red'}}>
          {this.props.logInError}
        </span><br/>
        <RaisedButton
          label="Sign In"
          onClick={_ => this.props.signals.example.logInPosted()}
        />
      </div>
    );
  }
}

export default LogIn;
