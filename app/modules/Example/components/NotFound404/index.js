import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral()
class NotFound404 extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        404
      </div>
    );
  }
}

export default NotFound404;
