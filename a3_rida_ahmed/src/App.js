import Dice from './components/dice/dice';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceSide, setDiceSide] = useState(6);
  const [diceVal, setDiceVal] = useState([]);

  useEffect(()=>{
    rollDice();
  }, [diceNumber, diceSide]);

  // increase number of dice
  var increaseDice = ()=>{
    setDiceNumber(diceNumber+1);
  };

  // decrease number of dice
  var decreaseDice = ()=>{
    if(diceNumber>1){
      setDiceNumber(diceNumber-1);
    }
  };

  // increase number of side
  var increaseSide = ()=>{
    if(diceSide<20){
      setDiceSide(diceSide+1);
    }
  };

  // decrease number of side
  var decreaseSide = ()=>{
    if(diceSide>1){
      setDiceSide(diceSide-1);
    }
  };

  // reset btn click
  var resetBtnClick = ()=>{
    setDiceNumber(1);
    setDiceSide(1);
  };

  // roll btn click
  var rollDice = ()=>{
    var diceArr = [];
    for(let i = 0; i < diceNumber; i++){
      var rendomNumber = Math.floor(Math.random()*(diceSide))+1;
      diceArr.push(rendomNumber);
    }
    setDiceVal(diceArr);
  };

  var key = 0;
  return (
    <div className="App">
      <div className="DiceDisplay">
        {diceVal.map(element => 
          { key = key + 1;
            return <Dice key={key+""+element} maxSide={diceSide} number={element}/>
          })
        }
      </div>


      {/* buttons section */}
      <div id='bunchOfButtons'>
        {/* dices btn */}
        <div id="increaseDice" className='buttons'>
          <div className='btnContainer'>
            <button className='btn' id='increaseDice' onClick={increaseDice.bind(this)} style={{transform: "rotate(-90deg)"}}>&#10140;</button>
          </div>
          <div className='numberDisplay'><strong>Number of dice:</strong> <span className='displayNumber'>{diceNumber}</span></div>
          <div className='btnContainer'>
            <button className='btn' id='decreaseDice' onClick={decreaseDice.bind(this)} style={{transform: "rotate(90deg)"}}>&#10140;</button>
          </div>
        </div>
        {/* roll btn */}
        <input type="button" value="Roll" className='btn' onClick={rollDice.bind(this)} />
        {/* reset btn */}
        <input type="button" value="Reset" className='btn' onClick={resetBtnClick.bind(this)} />
        {/* sides btn */}
        <div id="increaseSide" className='buttons'>
          <div className='btnContainer'>
            <button className='btn' onClick={increaseSide.bind(this)}  style={{transform: "rotate(-90deg)"}}>&#10140;</button>
          </div>
          <div className='numberDisplay'><strong>Number of side:</strong> <span className='displayNumber'>{diceSide}</span></div>
          <div className='btnContainer'>
            <button className='btn' onClick={decreaseSide.bind(this)}  style={{transform: "rotate(90deg)"}}>&#10140;</button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
