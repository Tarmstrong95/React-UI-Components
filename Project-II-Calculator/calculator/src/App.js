import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';


const numbers = [
  {
    number: "clear",
    buttonStyle: 'button-large'
  },
  {
    // number: "÷",
    number: "/",
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
    number: "*",
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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: "0", 
      cache: "0"
    }
  }

btnClick( button){
  if(button === "clear" && this.state.total !== "0")  this.setState({total: "0"});
  if(button === "clear" && this.state.total === "0")  console.log(button);
  if(this.state.total === "0" && button !== "clear") this.setState({total: button});
  if(this.state.total !== "0") this.setState({total: `${this.state.total}${button}`});
  if(this.state.total !== "0" && button === "clear") this.setState({total: "0"});
  if(button === "=") this.setState({total: this.calculate(this.state.total), cache: this.calculate(this.state.total)});
  if(this.state.cache !== "0") this.setState({total: button, cache: "0"})
}

calculate(string){
  return eval(string)
}
  render(){
    return (
    <div className="app">
        <CalculatorDisplay total={this.state.total}/>
        {numbers.map((number, i) => <NumberButton  key={i} obj={number} onClick={e => this.btnClick(e.target.textContent)}/>)}
    </div>
  );
    }
  
}

export default App;
