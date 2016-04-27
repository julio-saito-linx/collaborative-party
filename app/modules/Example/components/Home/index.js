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
        <LayoutBootstrap />
      </div>
    );
  }
}

export default Home;
