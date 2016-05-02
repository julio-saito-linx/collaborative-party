import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

import {
  TextField,
} from 'material-ui';

//
// component
//
@Cerebral({
  user: ['example', 'selectedUser'],
})
class LogIn extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <TextField
          hintText="Name"
          errorText="This field is required"
        /><br/>
      </div>
    );
  }
}

export default LogIn;
