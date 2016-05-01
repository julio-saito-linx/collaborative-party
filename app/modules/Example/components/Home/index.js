import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PhoneList from '../PhoneList';
import PhoneDetail from '../PhoneDetail';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
  },
  center: {
    textAlign: 'center',
  },
  buttonMargin: {
    margin: 20,
  },
  listLeft: {
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  detailsRight: {
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

@Cerebral({
  openDialog: ['example', 'openDialog'],
  selectedUser: ['example', 'selectedUser'],
})
class Home extends React.Component {
  static propTypes = {
    openDialog: PropTypes.bool,
    selectedUser: PropTypes.object,
    signals: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  // componentDidMount() {
  //   this.props.signals.homepageLoaded();
  // }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={() => this.props.signals.example.dialogCloseRequested()}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Phone List</h1>
          <h4>cerebral controller + baobab + material-ui</h4>

          <PhoneList />

          <Dialog
            style={styles.center}
            open={this.props.openDialog}
            title={this.props.selectedUser && this.props.selectedUser.name}
            actions={standardActions}
            onRequestClose={() => this.props.signals.example.dialogCloseRequested()}
          >
            <PhoneDetail />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

// onTouchTap={() => this.props.signals.example.dialogOpenRequested()}

export default Home;
