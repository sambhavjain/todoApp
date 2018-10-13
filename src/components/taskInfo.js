import React, { Component } from 'react';

export default class TaskInfo extends Component {
  constructor(props){
    super(props)
  	this.state = {
  		openInfo : false
  	}
  }


  render() {
 
    return (
      <div>
      	<h5>{this.props.infoObj.category}</h5>
      	<div>
      		{Object.values(this.props.infoObj).length ? <p>{this.props.infoObj.task} <span>{this.props.infoObj.place}</span></p> : <p>No Further Info for this Category</p>}
      	</div>
      </div>
    );
  }
}
