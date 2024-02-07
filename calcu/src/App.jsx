import  { useState } from 'react';
import './App.css';
const App = () => {
  const [state, setstate] = useState('');
  const whileClicking = (e) => {
    console.log(e.target.value);
    let btn = e.target.value;
    let newArray = state + btn;

    let symbols = '+-/*.';
    for (let k = 0; k < newArray.length; k++) {
      if (
        symbols.includes(newArray[k]) &&
        symbols.includes(newArray[k + 1])
      ) {
        newArray = newArray.slice(0, -1);
        alert('Two symbols should not be together.');
      }
    }
    setstate(newArray);
  };

  const whileClickingDelete = () => {
    let deletedArray = state.slice(0, -1);
    console.log(deletedArray);
    setstate(deletedArray);
  };

  return (
    <div className="main">
      <div className="datashown">{state}</div>
      <div className="allDiv">
        <button value="ac" onClick={() => setstate('')}>
          AC
        </button>
        <button
          onClick={() => {
            whileClickingDelete();
          }}
          value="del">DEL</button>
        <button onClick={whileClicking} value="+">+</button>
        <button onClick={whileClicking} value="1">1</button>
        <button onClick={whileClicking} value="2">2</button>
        <button onClick={whileClicking} value="3">3</button>
        <button onClick={whileClicking} value="4">4</button>
        <button onClick={whileClicking} value="5">5</button>
        <button onClick={whileClicking} value="6">6</button>
        <button onClick={whileClicking} value="7">7</button>
        <button onClick={whileClicking} value="8">8</button>
        <button onClick={whileClicking} value="9">9</button>
        <button onClick={whileClicking} value="0">0</button>
        <button onClick={whileClicking} value="-">-</button>
        <button onClick={whileClicking} value="/">/</button>
        <button onClick={whileClicking} value="*">*</button>
        <button
          onClick={() => {
            let total = eval(state).toString();
            setstate(total)}}value="=">=</button>
        <button onClick={whileClicking} value=".">.</button>
      </div>
    </div>
  );
};
export default App;