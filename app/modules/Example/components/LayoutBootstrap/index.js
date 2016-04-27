import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {Link} from 'cerebral-view-react';
import MenuTitle from './MenuTitle';

@Cerebral({
  layoutColor: ['example', 'layoutColor'],
  jumboTitle: ['example', 'jumboTitle'],
  jumboSubtitle: ['example', 'jumboSubtitle'],
  boxes: ['example', 'boxes'],
})
class LayoutBootstrap extends React.Component {
  static propTypes = {
    layoutColor: PropTypes.string,
    jumboTitle: PropTypes.string,
    jumboSubtitle: PropTypes.string,
    boxes: PropTypes.array,
    signals: PropTypes.object,
  };

  renderBoxes() {
    return (
      <div className="row">
        {this.props.boxes.map((box, index) => (
          <div className="col-sm-6" key={index}>
            <h4>{box.label}</h4>
            {box.text}
          </div>
        ))}
      </div>
    );
  }

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
                <Link signal="example.titleChanged" params={{newTitleContent: 'My Router'}}>
                  Change Title
                </Link>
              </li>
              <li>
                <Link signal="example.newContentLoaded">
                  Change Home Content
                </Link>
              </li>
            </ul>
          </nav>
          <MenuTitle />
        </div>

        <div className="jumbotron">
          <h1>{this.props.jumboTitle}</h1>
          <p className="lead">{this.props.jumboSubtitle}</p>
        </div>

        {this.renderBoxes()}

        <hr />
        <footer className="footer">
          <p>© 2016 Footer</p>
        </footer>
      </div>
    );
  }
}

export default LayoutBootstrap;
