import React from 'react';
import styles from './dice.module.css';

const Dice = (props) => {
  return (
    <div className={styles.Dice}>
      {props.number}
    </div>
  );
};

export default Dice;
