import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {List} from 'material-ui';
import UserItem from './UserItem';
import _ from 'lodash';

@Cerebral({
  usersList: ['example', 'usersList']
})
class UserList extends React.Component {
  static propTypes = {
    usersList: PropTypes.object,
    signals: PropTypes.object,
  };

  renderItens() {
    if (!this.props.usersList) {
      return null;
    }

    return _.map(this.props.usersList, (user) => (
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
