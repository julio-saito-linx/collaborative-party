import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {ListItem} from 'material-ui';

const styles = {
  selectedItem: {
    backgroundColor: '#ccc',
  },
};

@Cerebral({
  selectedPhoneId: ['example', 'selectedPhoneItem', 'id']
})
class PhoneItem extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
    name: PropTypes.string,
    selectedPhoneId: PropTypes.number,
    signals: PropTypes.object,
  };

  itemClicked() {
    const user = {
      id: this.props.id,
      username: this.props.username,
      name: this.props.name,
    };
    this.props.signals.example.phoneItemSelected({user});
  }

  isSelected() {
    return this.props.selectedPhoneId === this.props.id;
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
        primaryText={this.props.name}
        onClick={this.itemClicked.bind(this)}
      />
    );
  }
}

export default PhoneItem;
