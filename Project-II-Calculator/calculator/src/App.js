import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';


const numbers = [
  {
    number: "clear",
    buttonStyle: 'button-large'
  },
  {
    number: "÷",
    buttonStyle: 'button-small red'
  },
  {
    number: "7",
    buttonStyle: 'button-small'
  },
  {
    number: "8",
    buttonStyle: 'button-small'
  },
  {
    number: "9",
    buttonStyle: 'button-small'
  },
  {
    number: "x",
    buttonStyle: 'button-small red'
  },
  {
    number: "4",
    buttonStyle: 'button-small'
  },
  {
    number: "5",
    buttonStyle: 'button-small'
  },
  {
    number: "6",
    buttonStyle: 'button-small'
  },
  {
    number: "-",
    buttonStyle: 'button-small red'
  },
  {
    number: "1",
    buttonStyle: 'button-small'
  },
  {
    number: "2",
    buttonStyle: 'button-small'
  },
  {
    number: "3",
    buttonStyle: 'button-small'
  },
  {
    number: "+",
    buttonStyle: 'button-small red'
  },
  {
    number: "0",
    buttonStyle: 'button-large'
  },
  {
    number: "=",
    buttonStyle: 'button-small red'
  },
]

const App = () => {
  return (
    <div className="app">
        <CalculatorDisplay />
        {numbers.map(number => <NumberButton  obj={number} />)}
    </div>
  );
};

export default App;
