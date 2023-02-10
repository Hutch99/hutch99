import React from 'react';
import { Child } from './child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = { name: 'Frarthur' };
  }
  changeName(newName){
    this.setState({ name: newName });
  }
  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

export default Parent;