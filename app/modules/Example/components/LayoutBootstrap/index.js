import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {Link} from 'cerebral-view-react';
import MenuTitle from './MenuTitle';

@Cerebral({
  layoutColor: ['example', 'layoutColor'],
})
class LayoutBootstrap extends React.Component {
  static propTypes = {
    layoutColor: PropTypes.string,
    child1: PropTypes.any,
    child2: PropTypes.any,
    child3: PropTypes.any,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li>
                <Link signal="example.homepageLoaded">
                  Home
                </Link>
              </li>
              <li>
                <Link signal="example.pageALoaded">
                  Page A
                </Link>
              </li>
              <li>
                <Link signal="example.titleChanged" params={{newTitleContent: 'My Router'}}>
                  Change Title
                </Link>
              </li>
            </ul>
          </nav>
          <MenuTitle />
        </div>

        <div className="jumbotron">
          <h1>{this.props.child1}</h1>
          <p className="lead">{this.props.child2}</p>
        </div>

        <div className="row marketing">
          <div className="col-sm-6">
            {this.props.child3}
          </div>
          <div className="col-sm-6">
            {this.props.child3}
          </div>
        </div>
        <footer className="footer">
          <p>© 2016 Footer</p>
        </footer>
      </div>
    );
  }
}

export default LayoutBootstrap;
