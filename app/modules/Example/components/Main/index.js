import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import NotFound404 from '../NotFound404';
import Home from '../Home';

@Cerebral({
  pageName: ['example', 'pageName'],
})
class Main extends React.Component {
  static propTypes = {
    pageName: PropTypes.string,
    signals: PropTypes.object,
  };

  getPage() {
    if (this.props.pageName === 'home') {
      return <Home />;
    }
    return <NotFound404 />;
  }

  render() {
    return this.getPage();
  }
}

export default Main;
