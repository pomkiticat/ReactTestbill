import React, { Component } from "react";
class FuncComp extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>J {this.props.name}</h1>
      </div>
    );
  }
}
class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>www.javatpoint.com</h2>
        <p>This websites contains the great CS tutorial.</p>
      </div>
    );
  }
}

First.defaultProps = {
  name: "JavaTpoint"
};
export default FuncComp;
