import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui';
import {
  NavigationMoreVert,
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
  leftMenuButtonBack: ['example', 'leftMenuButtonBack'],
})
class Home extends React.Component {
  static propTypes = {
    openDialog: PropTypes.bool,
    pageTitle: PropTypes.string,
    selectedUser: PropTypes.object,
    leftMenuButtonBack: PropTypes.bool,
    signals: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  renderLeftIcon(props) {
    if (props.leftMenuButtonBack) {
      // render back button
      return (
        <IconButton
          onClick={_ => this.props.signals.example.redirectTo({page: '/phone-list'})}
        >
          <NavigationArrowBack />
        </IconButton>
      );
    }

    // render menu
    return (
      <IconMenu
        iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem
          primaryText="Sign"
          onClick={_ => this.props.signals.example.redirectTo({page: '/signIn'})}
        />
        <MenuItem
          primaryText="Login"
          onClick={_ => this.props.signals.example.redirectTo({page: '/login'})}
        />
        <MenuItem
          primaryText="PhoneList"
          onClick={_ => this.props.signals.example.redirectTo({page: '/phone-list'})}
        />
      </IconMenu>
    );
  }

  renderBody(props) {
    if (props.pageTitle === SIGN_IN) {
      return <SignIn />;
    } else if (props.pageTitle === LOG_IN) {
      return <LogIn />;
    } else if (props.pageTitle === PHONE_DETAIL) {
      return <PhoneDetail />;
    } else if (props.pageTitle === PHONE_LIST) {
      return <PhoneList />;
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
