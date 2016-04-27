import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {Link} from 'cerebral-view-react';

@Cerebral({
  titleContent: ['example', 'titleContent'],
})
class MenuTitle extends React.Component {
  static propTypes = {
    titleContent: PropTypes.string,
    signals: PropTypes.object,
  };

  render() {
    return (
      <Link className="navbar-brand" signal="example.redirectHome">
        {this.props.titleContent}
      </Link>
    );
  }
}

export default MenuTitle;
