import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

import {
  List,
  ListItem} from 'material-ui';

import {
  CommunicationCall,
  CommunicationChatBubble } from 'material-ui/svg-icons';

import { indigo500 } from 'material-ui/styles/colors';

@Cerebral({
  usersList: ['example', 'usersList']
})

class PhoneList extends React.Component {
  static propTypes = {
    usersList: PropTypes.array,
    signals: PropTypes.object,
  };

  renderItens() {
    if (!this.props.usersList || this.props.usersList.length === 0) {
      return null;
    }

    return this.props.usersList.map(user => (
      <ListItem
        key={user.id}
        leftIcon={<CommunicationCall color={indigo500} />}
        rightIcon={<CommunicationChatBubble />}
        primaryText={user.username}
        secondaryText={user.name}
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

export default PhoneList;
