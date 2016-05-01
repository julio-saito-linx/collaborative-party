import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {ListItem} from 'material-ui';
import {
  CommunicationCall,
  CommunicationChatBubble,
} from 'material-ui/svg-icons';
import {indigo500} from 'material-ui/styles/colors';

const styles = {
  selectedItem: {
    backgroundColor: '#ccc',
  },
};

@Cerebral({
  selectedId: ['example', 'selectedUser', 'id']
})
class PhoneItem extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
    name: PropTypes.string,
    selectedId: PropTypes.number,
    signals: PropTypes.object,
  };

  itemClicked() {
    const user = {
      id: this.props.id,
      username: this.props.username,
      name: this.props.name,
    };
    this.props.signals.example.phoneItemSelected({user});
    this.props.signals.example.dialogOpenRequested();
  }

  isSelected() {
    return this.props.selectedId === this.props.id;
  }

  getSelectedStyle() {
    if (this.isSelected()) {
      return styles.selectedItem;
    }
    return null;
  }

  render() {
    return (
      <ListItem
        key={this.props.id}
        value={this.props.id}
        style={this.getSelectedStyle()}
        // leftIcon={<CommunicationCall color={indigo500} />}
        // rightIcon={<CommunicationChatBubble />}
        primaryText={this.props.name}
        onClick={this.itemClicked.bind(this)}
      />
    );
  }
}

export default PhoneItem;
