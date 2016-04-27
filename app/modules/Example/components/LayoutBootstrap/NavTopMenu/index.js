import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {Link} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  titleContent: ['example', 'titleContent'],
})
class NavTopMenu extends React.Component {
  static propTypes = {
    titleContent: PropTypes.string,
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
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link
                  className={styles['link-ponter']}
                  signal="example.homepageLoaded"
                >
                  Home Content
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-ponter']}
                  signal="example.newContentLoaded"
                >
                  Change Content
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-ponter']}
                  signal="example.titleCleared"
                >
                  No Title
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-ponter']}
                  signal="example.contentCleared"
                >
                  No Content
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-ponter']}
                  signal="example.titleChanged"
                  params={{newTitleContent: 'My Router'}}
                >
                  title: My router
                </Link>
              </li>
              <li>
                <Link
                  className={styles['link-ponter']}
                  signal="example.titleChanged"
                  params={{newTitleContent: 'Cerebral Router'}}
                >
                  title: Cerebral Router
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
