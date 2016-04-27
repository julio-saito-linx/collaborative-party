import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import NavTopMenu from './NavTopMenu';
import styles from './styles.css';
import {Link} from 'cerebral-view-react';

@Cerebral({
  jumboTitle: ['example', 'jumboTitle'],
  jumboSubtitle: ['example', 'jumboSubtitle'],
  boxes: ['example', 'boxes'],
})
class LayoutBootstrap extends React.Component {
  static propTypes = {
    jumboTitle: PropTypes.string,
    jumboSubtitle: PropTypes.string,
    boxes: PropTypes.array,
    signals: PropTypes.object,
  };

  renderJumbotron() {
    if (this.props.jumboTitle) {
      return (
        <div className="jumbotron">
          <h1>{this.props.jumboTitle}</h1>
          <p className="lead">{this.props.jumboSubtitle}</p>
        </div>
      );
    }
    return null;
  }

  renderBoxes() {
    if (!this.props.boxes || this.props.boxes.length === 0) {
      return null;
    }

    let boxClass = 'col-sm-6';
    if (this.props.boxes.length > 2) {
      boxClass = 'col-sm-3';
    }
    return (
      <div className="row">
        {this.props.boxes.map((box, index) => (
          <div className={boxClass} key={index}>
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
        <div className={styles['up-margin']}>
          <div className="header clearfix">
            <NavTopMenu />
          </div>
          {this.renderJumbotron()}
          {this.renderBoxes()}
          <hr />
          <footer className="footer">
            <p>© 2016 Footer</p>
            <Link
              className={styles['link-pointer']}
              signal="example.titleChanged"
              params={{newTitleContent: 'My Router'}}
            >
              title:"My router"
            </Link>
            {" | "}
            <Link
              className={styles['link-pointer']}
              signal="example.titleChanged"
              params={{newTitleContent: 'Cerebral Router'}}
            >
              title:"Cerebral Router"
            </Link>
          </footer>
        </div>
      </div>
    );
  }
}

export default LayoutBootstrap;
