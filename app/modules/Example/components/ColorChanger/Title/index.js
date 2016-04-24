import React from 'react';
import styles from './styles.css';

function Title(props) {
  return (
    <h1 style={{color: props.titleColor}} className={styles.title}>
      {props.children}
    </h1>
  );
}

Title.propTypes = {
  titleColor: React.PropTypes.string,
  children: React.PropTypes.any.isRequired,
};

export default Title;
