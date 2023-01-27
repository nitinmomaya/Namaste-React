import React, { Component } from "react";

export default class ProfileClass extends Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    return (
      <div>
        ProfileClass
        <h1> Name: {this.props.name}</h1>
        <h1>Count: {this.state.count}</h1> <h1>Count2: {this.state.count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          ADD 2
        </button>
      </div>
    );
  }
}
