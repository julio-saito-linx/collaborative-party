import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import LayoutBootstrap from '../LayoutBootstrap';

@Cerebral()
class PageA extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <LayoutBootstrap
          child1="Page A"
          child2="This is the page A"
          child3={(
            <div>
              <h4>PAGE A</h4>
              <p>A A A A A A A A A A </p>
              <p>A A A A A A A A A A </p>
              <p>A A A A A A A A A A </p>
            </div>
          )}
        />
      </div>
    );
  }
}

export default PageA;
