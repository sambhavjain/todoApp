import React, { Component } from 'react';

export default class EmptyList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <p>{this.props.msg}</p>
    );
  }
}
