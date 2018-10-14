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
    		{(this.props.infoObj.task != '' || this.props.infoObj.place != '') ? <p>{this.props.infoObj.task} <span >{this.props.infoObj.place}</span></p> : <p>No Further Info for this Category</p>}
    	</div>
    )
  }
}
