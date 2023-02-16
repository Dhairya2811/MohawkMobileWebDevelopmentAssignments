import Dice from './components/dice/dice';
import './App.css';

function App() {
  var diceArr = [6, 4, 3, 5, 9, 20];
  return (
    <div className="App">
      {diceArr.map(element => 
        {
          return <Dice number={element}/>
        })
      }
    </div>
  );
}

export default App;
