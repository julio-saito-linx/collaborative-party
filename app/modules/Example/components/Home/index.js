import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
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
            1-2-3-4-5
          </Dialog>
          <h1>material-ui</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            primary={true}
            onTouchTap={() => this.props.signals.example.dialogOpenRequested()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
