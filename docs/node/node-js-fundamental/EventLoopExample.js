import React, { Component } from 'react';

class EventLoopExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
    };
  }

  componentDidMount() {
    // Simulate the event loop example using React state and `setTimeout`.
    setTimeout(() => {
      this.setState((prevState) => ({
        output: [...prevState.output, 'Timer Callback 1'],
      }));
    }, 1000);

    setTimeout(() => {
      this.setState((prevState) => ({
        output: [...prevState.output, 'Timer Callback 2'],
      }));
    }, 500);

    // Immediate execution
    this.setState((prevState) => ({
      output: [...prevState.output, 'Immediate Execution'],
    }));
  }

  render() {
    return (
      <div>
        <h2 style={{color:'yellow'}}>Console</h2>
        <hr style={{backgroundColor:'yellow'}} />
        <div>
          {this.state.output.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default EventLoopExample;
