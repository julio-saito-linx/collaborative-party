import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Layout from '../Layout';

@Cerebral()
class PageA extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Layout
          child1={<h3>PageA</h3>}
          child2={<hr/>}
          child3={<p>Child 3</p>}
        />
      </div>
    );
  }
}

export default PageA;
