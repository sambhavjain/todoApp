import React, { Component } from 'react';
import TaskInfo from './taskInfo.js'

export default class TodoList extends Component {
  constructor(props){
    super(props)
  	this.state = {}
  }

  handleCheck = (e) => {
  	console.log('e',JSON.parse(e.target.value))
  	this.props.addToCompletedTasks(JSON.parse(e.target.value))
  }

  render() {
  	let todoList = []
  	todoList = this.props.list.map((obj,index)=>{
  		return <li key={index}>
  				<input type="checkbox" value={JSON.stringify(obj)}/><label>{obj.category}</label>
  			</li>
  	})

    return (
      <div>
      	<h4>Your Active Tasks</h4>
      	<div onChange={(e)=>this.handleCheck(e)}>
      		{todoList}
      		
      	</div>
      </div>
    );
  }
}
