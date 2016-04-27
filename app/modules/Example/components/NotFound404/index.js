import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import LayoutBootstrap from '../LayoutBootstrap';

@Cerebral()
class NotFound404 extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <LayoutBootstrap
          jumboTitle="404"
          jumboSubtitle="Page not found"
          boxes={[{
            label: 'not',
            text: 'found',
          }]}
        />
      </div>
    );
  }
}

export default NotFound404;
