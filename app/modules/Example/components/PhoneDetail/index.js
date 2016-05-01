import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import _ from 'lodash';

@Cerebral({
  user: ['example', 'selectedUser'],
})
class PhoneDetail extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    signals: PropTypes.object,
  };

  getAllUserProps(props) {
    if (props.user) {
      return _.map(props.user, (prop, key) => {
        if (typeof prop === 'string' || typeof prop === 'number') {
          return (
            <div key={key}>
              <strong>
                {key}
              </strong>
              {': '}
              <span>
                {prop}
              </span>
              <br />
            </div>
          );
        }
        return null;
      });
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3>{'Detail'}</h3>
        <hr />
        {this.getAllUserProps(this.props)}
      </div>

    );
  }
}

export default PhoneDetail;
