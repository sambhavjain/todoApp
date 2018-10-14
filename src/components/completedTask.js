import React, { Component } from 'react';
import TaskInfo from './taskInfo.js'

export default class CompletedTask extends Component {
  constructor(props){
    super(props)
  	this.state = {}
  }

   handleCheck = (e) => {
    console.log('e',JSON.parse(e.target.value))
    this.props.addToActiveTasks(JSON.parse(e.target.value))
  }

  render() {
  	let todoList = []
  	todoList = this.props.list.map((obj,index)=>{
  		return <li value={obj} key={index}>
          <input type="checkbox" value={JSON.stringify(obj)}/><label>{obj.category}</label><p>{obj.task}</p>
        </li>
  	})

    return (
      <div>
      	<h4>Completed Tasks</h4>
      	<div onChange={(e)=>this.handleCheck(e)}>
          <ul>
      		  {todoList}
      		</ul>
      	</div>
      </div>
    );
  }
}
