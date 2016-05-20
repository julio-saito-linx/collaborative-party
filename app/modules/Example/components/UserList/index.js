import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {List} from 'material-ui';
import UserItem from './UserItem';
import _ from 'lodash';

@Cerebral({
  phoneList: ['example', 'phoneList']
})
class UserList extends React.Component {
  static propTypes = {
    phoneList: PropTypes.object,
    signals: PropTypes.object,
  };

  renderItens() {
    if (!this.props.phoneList) {
      return null;
    }

    return _.map(this.props.phoneList, (user) => (
      <UserItem
        key={user.id}
        id={user.id}
        username={user.username}
        name={user.name}
      />
    ));
  }

  render() {
    return (
      <div>
        <List>
          {this.renderItens()}
        </List>
      </div>
    );
  }
}

export default UserList;
