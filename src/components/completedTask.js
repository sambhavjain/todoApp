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
         {/* <button className="delete">Delete</button>*/}
        </li>
  	})

    return (
      <div className="listContainer">
      	<h4>Completed Tasks</h4>
        <ul className="list" onChange={(e)=>this.handleCheck(e)}>
    		  {todoList}
    		</ul>
      </div>
    );
  }
}
