import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState(0);
  console.log(boxes);

  function updateBox(num) {
    localStorage.setItem('boxes', num);
  }

  function handleAdd() {
    const num = boxes + 1;
    setBoxes(num);
    updateBox(num);
  }
  function handleMinus() {
    const num = boxes - 1;
    setBoxes(num);
    updateBox(num);
  }

  useEffect(() => {
    const localBoxes = localStorage.getItem('boxes');
    if (localBoxes !== 'undefined') {
      setBoxes(parseInt(localBoxes));
    } else {
      setBoxes(0);
    }
  }, []);

  return (
    <div className='app'>
      <button className='minus btn btn-lg btn-primary' onClick={handleMinus}>
        <i className='icon icon-minus btn btn-primary'></i>
      </button>
      <div className='number'>{boxes}</div>
      <button className='plus btn btn-lg btn-primary' onClick={handleAdd}>
        <i className='icon icon-plus btn btn-primary'></i>
      </button>
    </div>
  );
}

export default App;
