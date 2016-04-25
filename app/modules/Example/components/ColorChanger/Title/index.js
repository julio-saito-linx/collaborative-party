import React from 'react';
import styles from './styles.css';
import { arrayToRgba } from '../../../utils';

function Title(props) {
  return (
    <h1 style={{color: arrayToRgba(props.titleColor)}} className={styles.title}>
      {props.children}
    </h1>
  );
}

Title.propTypes = {
  titleColor: React.PropTypes.array,
  children: React.PropTypes.any.isRequired,
};

export default Title;
