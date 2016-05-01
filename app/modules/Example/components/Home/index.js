import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import RaisedButton from 'material-ui/RaisedButton';
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
    paddingTop: 50,
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
})
class Home extends React.Component {
  static propTypes = {
    openDialog: PropTypes.bool,
    signals: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

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
          <Dialog
            open={this.props.openDialog}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={() => this.props.signals.example.dialogCloseRequested()}
          >
            pa$$w0rd
          </Dialog>
          <h1>material-ui</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Dialog Example"
            primary={true}
            style={styles.buttonMargin}
            onTouchTap={() => this.props.signals.example.dialogOpenRequested()}
          />
          <RaisedButton
            label="Get List"
            secondary={true}
            style={styles.buttonMargin}
            onTouchTap={() => this.props.signals.example.httpGetRequested()}
          />

          <div style={styles.containerDiv}>
            <div style={styles.listLeft}>
              <PhoneList />
            </div>
            <div style={styles.detailsRight}>
              <PhoneDetail />
            </div>
          </div>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
