import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
/* eslint-disable react/destructuring-assignment */

// class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     state = {
//       total: 0,
//       next: null,
//       operation: null,
//     };
//   }

//   handleChange = (e) => {
//     const final = calculate(state, e.target.innerHTML);
//     setState(final);
//   };

function Calculator() {
  const [data, setData] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const handleChange = (e) => {
    const inp = e.target.innerHTML;
    const final = calculate(data, inp);
    setData(final);
  };

  const results = `
  ${
  data.total || data.operation || data.next
    ? `${data.total || ''} ${data.operation || ''} ${data.next || ''}`
    : 0
}`;

  return (
    <div className="main">
      <form className="screen">
        <input disabled className="input" maxLength={12} value={results} />
      </form>
      <button
        className="btn light-gray"
        type="button"
        onClick={handleChange}
        id="AC"
      >
        AC
      </button>
      <button
        className="btn light-gray"
        type="button"
        onClick={handleChange}
        id="+/-"
      >
        +/-
      </button>
      <button
        className="btn light-gray"
        type="button"
        onClick={handleChange}
        id="%"
      >
        %
      </button>
      <button
        className="btn orange"
        type="button"
        onClick={handleChange}
        id="÷"
      >
        ÷
      </button>
      <button className="btn" type="button" onClick={handleChange} id="7">
        7
      </button>
      <button className="btn" type="button" onClick={handleChange} id="8">
        8
      </button>
      <button className="btn" type="button" onClick={handleChange} id="9">
        9
      </button>
      <button
        className="btn orange"
        type="button"
        onClick={handleChange}
        id="X"
      >
        x
      </button>
      <button className="btn" type="button" onClick={handleChange} id="4">
        4
      </button>
      <button className="btn" type="button" onClick={handleChange} id="5">
        5
      </button>
      <button className="btn" type="button" onClick={handleChange} id="6">
        6
      </button>
      <button
        className="btn orange"
        type="button"
        onClick={handleChange}
        id="-"
      >
        -
      </button>
      <button className="btn" type="button" onClick={handleChange} id="1">
        1
      </button>
      <button className="btn" type="button" onClick={handleChange} id="2">
        2
      </button>
      <button className="btn" type="button" onClick={handleChange} id="3">
        3
      </button>
      <button
        className="btn orange"
        type="button"
        onClick={handleChange}
        id="+"
      >
        +
      </button>
      <button className="btn zero" type="button" onClick={handleChange} id="0">
        0
      </button>
      <button className="btn" type="button" onClick={handleChange} id="dot">
        .
      </button>
      <button
        className="btn orange"
        type="button"
        onClick={handleChange}
        id="="
      >
        =
      </button>
    </div>
  );
}

export default Calculator;
