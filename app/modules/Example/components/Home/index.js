import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {
  AppBar,
  IconButton,
} from 'material-ui';
import {
  NavigationArrowBack,
} from 'material-ui/svg-icons';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  PHONE_LIST,
  PHONE_DETAIL,
  SIGN_IN,
  LOG_IN,
} from '../../constants.js';

import PhoneList from '../PhoneList';
import PhoneDetail from '../PhoneDetail';
import SignIn from '../SignIn';
import LogIn from '../LogIn';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

@Cerebral({
  openDialog: ['example', 'openDialog'],
  pageTitle: ['example', 'pageTitle'],
  selectedUser: ['example', 'selectedUser'],
})
class Home extends React.Component {
  static propTypes = {
    openDialog: PropTypes.bool,
    pageTitle: PropTypes.string,
    selectedUser: PropTypes.object,
    signals: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  renderLeftIcon(props) {
    if (props.pageTitle === PHONE_LIST) {
      return null;
    }
    return (
      <IconButton
        onClick={_ => this.props.signals.example.backToListClicked()}
      >
        <NavigationArrowBack />
      </IconButton>
    );
  }

  renderBody(props) {
    if (props.pageTitle === PHONE_LIST) {
      return <PhoneList />;
    }
    if (props.pageTitle === PHONE_DETAIL) {
      return <PhoneDetail />;
    }
    if (props.pageTitle === SIGN_IN) {
      return <SignIn />;
    }
    if (props.pageTitle === LOG_IN) {
      return <LogIn />;
    }
    return null;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title={this.props.pageTitle}
            iconElementLeft={this.renderLeftIcon(this.props)}
          />
          {this.renderBody(this.props)}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
