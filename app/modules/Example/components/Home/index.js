import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import LayoutBootstrap from '../LayoutBootstrap';

@Cerebral()
class Home extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <LayoutBootstrap
          child1="Home"
          child2="Welcome"
          child3={(
            <div>
              <h4>This is home</h4>
              <p>home</p>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Home;
