import React, {useState} from 'react';

import styles from './dice.module.css';

const Dice = (props) => {
  var [displayNumber, setDisplayNumber] = useState(props.number);

  var increaseNumOnDice = ()=>{
    if(displayNumber<props.maxSide){
      setDisplayNumber(displayNumber+=1)
    }else{
      setDisplayNumber(1);
    }
  };

  return (
    <div onClick={increaseNumOnDice.bind(this)} className={styles.Dice}>
      {displayNumber}
    </div>
  );
};

export default Dice;
