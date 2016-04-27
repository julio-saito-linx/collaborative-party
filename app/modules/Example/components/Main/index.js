import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import PageA from '../PageA';
import Home from '../Home';
import NotFound404 from '../NotFound404';

@Cerebral({
  pageName: ['example', 'pageName'],
})
class Main extends React.Component {
  static propTypes = {
    pageName: PropTypes.string,
    signals: PropTypes.object,
  };

  getPage(pageName) {
    if (pageName === 'home') {
      return <Home />;
    }
    if (pageName === 'PageA') {
      return <PageA />;
    }
    return <NotFound404 />;
  }

  render() {
    return (
      <div>
        {this.getPage(this.props.pageName)}
      </div>
    );
  }
}

export default Main;
