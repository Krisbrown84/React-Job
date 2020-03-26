import React, { Component } from 'react';
import './App.css';
import Job from './components/Job';
import Button from './components/Button';


class App extends Component {
  state = {
    job: "Software Developer"
  }

  changeJob=() => {
    console.log("Change is running");
    this.setState({
        job: "Web Designer"
    });
    console.log("Inside of changeJob state is " + this.state.job);
  }

componentDidMount = () => {
  console.log("Inside of Component did mount");
}

  render () {
    console.log("Inside of Render state is " + this.state.job);
    console.log("inside of the render");
    return (
      <div>
      <Job currentJob={this.state.job} />
      <Button myFunc={this.changeJob} />
      </div>
    )
  }
}

export default App;
