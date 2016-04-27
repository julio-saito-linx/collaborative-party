import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Layout from '../Layout';

@Cerebral()
class NotFound404 extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Layout
          child1={<h3>404</h3>}
          child2={<hr/>}
          child3={<p>Page not found</p>}
        />
      </div>
    );
  }
}

export default NotFound404;
