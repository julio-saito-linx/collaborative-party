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
      <h3 className="text-muted">
        <Link signal="example.redirectHome">
          {this.props.titleContent}
        </Link>
      </h3>
    );
  }
}

export default MenuTitle;
