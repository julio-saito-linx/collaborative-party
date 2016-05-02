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
  user: ['example', 'selectedUser'],
})
class SignIn extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          // errorText="This field is required"
          onChange={event => this.props.signals.example.signInUserChanged({
            fieldName: 'name',
            value: event.target.value,
          })}
        /><br/>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          // errorText="This field is required"
          onChange={event => this.props.signals.example.signInUserChanged({
            fieldName: 'email',
            value: event.target.value,
          })}
        /><br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          // errorText="This field is required"
          onChange={event => this.props.signals.example.signInUserChanged({
            fieldName: 'password',
            value: event.target.value,
          })}
        /><br/>
        <TextField
          hintText="Confirm Password"
          floatingLabelText="Confirm Password"
          type="password"
          // errorText="This field is required"
          onChange={event => this.props.signals.example.signInUserChanged({
            fieldName: 'passwordConfirmation',
            value: event.target.value,
          })}
        /><br/>
        <RaisedButton
          label="Sign In"
          onClick={_ => this.props.signals.example.signInPosted()}
        />
      </div>
    );
  }
}

export default SignIn;
