import React, {Component} from 'react';

function CustomBtn(props){
	return(
		<button onClick={props.func}>{props.name}</button>
	)
}

function CustomBtn2(props){
	return(
		<button>{props.children}</button>
	)
}

class MyFirstClass extends Component{
	constructor(props){
		super(props)
		this.name = "newBtn"
		this.changeBtnName = this.changeBtnName.bind(this)
		this.state={
			name : "newBtn"
		}
	}

	changeBtnName(newName){
		this.setState({name:newName})
		console.log("change name")
	}

	render(){
		return(
		<div>
		<hl>Hello all, this is my first Class</hl>
		<button onClick={()=>{this.changeBtnName(this.props.name)}}> {this.state.name} </button>
		</div>
		)
	}
}

export default {CustomBtn, CustomBtn2, MyFirstClass}