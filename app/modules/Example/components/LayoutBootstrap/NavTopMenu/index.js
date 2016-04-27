import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {Link} from 'cerebral-view-react';
import MenuTitle from './MenuTitle';
import styles from './styles.css';

@Cerebral()
class NavTopMenu extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <MenuTitle />
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link
                  className={styles['link-pointer']}
                  signal="example.homepageLoaded"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-pointer']}
                  signal="example.newContentLoaded"
                >
                  all:change
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-pointer']}
                  style={{color: '#a33'}}
                  signal="example.titleCleared"
                >
                  title:remove
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-pointer']}
                  style={{color: '#a33'}}
                  signal="example.contentCleared"
                >
                  content:remove
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavTopMenu;
