import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Home from '../Home';

@Cerebral({
  pageTitle: ['example', 'pageTitle'],
})
class Main extends React.Component {
  static propTypes = {
    pageTitle: PropTypes.string,
    signals: PropTypes.object,
  };

  render() {
    return <Home />;
  }
}

export default Main;
