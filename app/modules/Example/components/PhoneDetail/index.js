import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {List} from 'material-ui';
import {ListItem} from 'material-ui';
import {
  CommunicationCall,
  CommunicationEmail,
  ActionWork,
} from 'material-ui/svg-icons';

const styles = {
  left: {
    textAlign: 'left',
  },
};

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
      return (
        [
          <ListItem
            key={0}
            leftIcon={<CommunicationCall />}
            primaryText={props.user.phone}
          />,
          <ListItem
            key={1}
            leftIcon={<CommunicationEmail />}
            primaryText={props.user.email}
          />,
          <ListItem
            key={2}
            leftIcon={<ActionWork />}
            primaryText={props.user.company && props.user.company.name}
          />,
        ]
      );
    }
    return null;
  }

  render() {
    return (
      <List style={styles.left}>
        {this.getAllUserProps(this.props)}
      </List>
    );
  }
}

export default PhoneDetail;
