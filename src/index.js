import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import './index.css';

var textField=""
var barPercent = 20
var myClassBtnName = "classBtn"


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const TestBtnFunc = ()=>{
  return(
    <div>
      <button value={"h"} onClick={(e)=>{printValue(barPercent); barPercent += 10;}}> testButton </button>
      <input type="text" onChange={(e)=>{textField=e.target.value}}/>
    </div>
    )
}

const printValue=(content)=>
{
 console.log(content) 
}

const TestlabelFunc = ()=>{
  return(
    <div>
      <ul>
          <li> Hello world!</li>
          <li> Hello world2!</li>
        </ul>
    </div>
    )
}
class MyProgress extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <button> new Btn</button>
            </div>
        )
    }
}

function Progress(props){
    const barWidth=props.percent.toString() + "%";
    {console.log(props.percent)}
    return(
        <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
        </div>
      </div>
    );
}

// ========================================

ReactDOM.render(
  <div>
  <TestBtnFunc/>
  <TestBtnFunc/>
  <TestlabelFunc/>
  <Progress percent = {barPercent}/>
  <App.CustomBtn func={() =>{printValue("test");}} name="test"/>
  <App.CustomBtn2> hello + {barPercent.toString()} </App.CustomBtn2>
  <div>
    <App.MyFirstClass name={myClassBtnName + barPercent.toString()} handleClick={()=>{
        printValue("class click"); 
        myClassBtnName = "newBtn";
    }}></App.MyFirstClass>
  </div>
  <MyProgress></MyProgress>
  </div>,
    document.getElementById('root')
);