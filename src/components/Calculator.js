import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
/* eslint-disable react/destructuring-assignment */

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleChange = (e) => {
    const final = calculate(this.state, e.target.innerHTML);
    this.setState(final);
  };

  render() {
    return (
      <div className="main">
        <form className="screen">
          <input
            disabled
            className="input"
            maxLength={12}
            value={this.state.next || this.state.total || 0}
          />
        </form>
        <button
          className="btn light-gray"
          type="button"
          onClick={this.handleChange}
          id="AC"
        >
          AC
        </button>
        <button
          className="btn light-gray"
          type="button"
          onClick={this.handleChange}
          id="+/-"
        >
          +/-
        </button>
        <button
          className="btn light-gray"
          type="button"
          onClick={this.handleChange}
          id="%"
        >
          %
        </button>
        <button
          className="btn orange"
          type="button"
          onClick={this.handleChange}
          id="÷"
        >
          ÷
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="7"
        >
          7
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="8"
        >
          8
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="9"
        >
          9
        </button>
        <button
          className="btn orange"
          type="button"
          onClick={this.handleChange}
          id="X"
        >
          x
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="4"
        >
          4
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="5"
        >
          5
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="6"
        >
          6
        </button>
        <button
          className="btn orange"
          type="button"
          onClick={this.handleChange}
          id="-"
        >
          -
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="1"
        >
          1
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="2"
        >
          2
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="3"
        >
          3
        </button>
        <button
          className="btn orange"
          type="button"
          onClick={this.handleChange}
          id="+"
        >
          +
        </button>
        <button
          className="btn zero"
          type="button"
          onClick={this.handleChange}
          id="0"
        >
          0
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleChange}
          id="dot"
        >
          .
        </button>
        <button
          className="btn orange"
          type="button"
          onClick={this.handleChange}
          id="="
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
