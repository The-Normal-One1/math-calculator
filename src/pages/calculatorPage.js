import React from 'react';
import Calculator from '../components/Calculator';
import '../components/Calculator.css';

function Math() {
  return (
    <div className="Calculate">
      <h3 className="mathHeader">Let&apos;s do some math!</h3>
      <div className="App">
        <Calculator />
      </div>
    </div>
  );
}

export default Math;
