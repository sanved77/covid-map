import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiRes: ""};
  }

  performHealthCheck(){
    fetch("http://localhost:9000/health")
      .then(res => res.text() )
      .then((res) => {this.setState({apiRes: res})});
  }

  componentWillMount(){
    this.performHealthCheck();
  }

  render() {
    return (
      <div>
        <p>hello</p>
        <p>;{this.state.apiRes}</p>
      </div>
    );
  }

}
export default App;
