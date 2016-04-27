import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import PageA from '../PageA';
import NotFound404 from '../NotFound404';
import Layout from '../Layout';

@Cerebral({
  pageName: ['example', 'pageName'],
})
class Main extends React.Component {
  static propTypes = {
    pageName: PropTypes.string,
    signals: PropTypes.object,
  };

  getPage(pageName) {
    if (pageName === 'PageA') {
      return <PageA />;
    }
    if (typeof pageName === 'undefined') {
      return <NotFound404 />;
    }
    return <Layout />;
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
