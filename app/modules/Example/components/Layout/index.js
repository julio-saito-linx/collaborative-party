import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {Link} from 'cerebral-view-react';

@Cerebral({
  layoutColor: ['example', 'layoutColor'],
})
class Layout extends React.Component {
  static propTypes = {
    layoutColor: PropTypes.string,
    child1: PropTypes.any,
    child2: PropTypes.any,
    child3: PropTypes.any,
    signals: PropTypes.object,
  };

  render() {
    return (
      <div style={{backgroundColor: this.props.layoutColor}}>
        <h2>Layout</h2>
        <p>
          Menu
        </p>
        <p>
          <button
            style={{
              cursor: 'pointer',
              margin: '10px',
            }}
            onClick={_ => this.props.signals.example.goHome({pageName: ''})}
          >
            Layout only
          </button>

          <button
            style={{
              cursor: 'pointer',
              margin: '10px',
            }}
            onClick={_ => this.props.signals.example.pageALoaded({pageName: 'PageA'})}
          >
            Page A
          </button>

          <Link
            style={{
              textDecoration: 'underline',
              color: 'blue',
              cursor: 'pointer',
              margin: '10px',
            }}
            signal="example.redirectTo404"
          >404</Link>
        </p>
        <hr />
        {this.props.child1}
        {this.props.child2}
        {this.props.child3}
      </div>
    );
  }
}

export default Layout;
