import React, { Component } from 'react';
import './App.css';

class Caculator extends Component {

  state = {
    displayValue: '0'
  }

  inputDigit (digit){
    const {displayValue} = this.state

    this.setState({
      displayValue: displayValue === '0' ? String(digit):  displayValue + digit
    })
  }
  render() {

    const {displayValue} = this.state
    return (

      <div className="calculator-wrapper">
        <div className="cal-display">{displayValue}</div>
        <div className="cal-btn btn-clear option">AC</div>
        <div className="cal-btn btn-negative option">-/+</div>
        <div className="cal-btn btn-percent option">%</div>
        <div className="cal-btn btn-division operate">/</div>
        <div className="cal-btn btn-7 number" onClick={() => this.inputDigit(7)}>7</div>
        <div className="cal-btn btn-8 number" onClick={() => this.inputDigit(8)}>8</div>
        <div className="cal-btn btn-9 number" onClick={() => this.inputDigit(9)}>9</div>
        <div className="cal-btn btn-mutiplication operate">x</div>
        <div className="cal-btn btn-6 number" onClick={() => this.inputDigit(6)}>6</div>
        <div className="cal-btn btn-5 number" onClick={() => this.inputDigit(5)}>5</div>
        <div className="cal-btn btn-4 number" onClick={() => this.inputDigit(4)}>4</div>
        <div className="cal-btn btn-summation operate">+</div>
        <div className="cal-btn btn-1 number" onClick={() => this.inputDigit(1)}>1</div>
        <div className="cal-btn btn-2 number" onClick={() => this.inputDigit(2)}>2</div>
        <div className="cal-btn btn-3 number" onClick={() => this.inputDigit(3)}>3</div>
        <div className="cal-btn btn-subtraction operate">-</div>
        <div className="cal-btn btn-0 number" onClick={() => this.inputDigit(0)}>0</div>
        <div className="cal-btn btn-dot">.</div>
        <div className="cal-btn btn-equal operate">=</div>
      </div>
    );
  }
}

export default Caculator;
