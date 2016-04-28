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
    paddingTop: 50,
  },
  buttonMargin: {
    margin: 20,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

@Cerebral({
  openDialog: ['example', 'openDialog'],
  userId: ['example', 'userId'],
  id: ['example', 'id'],
  title: ['example', 'title'],
  body: ['example', 'body'],
})
class Home extends React.Component {
  static propTypes = {
    openDialog: PropTypes.bool,
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
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
            label="Some Password"
            primary={true}
            style={styles.buttonMargin}
            onTouchTap={() => this.props.signals.example.dialogOpenRequested()}
          />
          <RaisedButton
            label="Get Data"
            secondary={true}
            style={styles.buttonMargin}
            onTouchTap={() => this.props.signals.example.httpGetRequested()}
          />

          <p>
            <label>
              <strong>
                userId:
              </strong>
            </label>
            <br />
            {this.props.userId}
          </p>
          <p>
            <label>
              <strong>
                id:
              </strong>
            </label>
            <br />
            {this.props.id}
          </p>
          <p>
            <label>
              <strong>
                title:
              </strong>
            </label>
            <br />
            {this.props.title}
          </p>
          <p>
            <label>
              <strong>
                body:
              </strong>
            </label>
            <br />
            {this.props.body}
          </p>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
