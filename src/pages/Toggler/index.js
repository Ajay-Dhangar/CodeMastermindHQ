// @ts-check

import React, {Component} from 'react';
import classes from './Toggler.module.css';
import Buses from './_components/Buses/Buses';

const BUSES = {
  buses: [
    {id: '20210330005200', name: 'Клиффорд', num: 296},
    {id: '20220611183712', name: 'РТИ', num: 297},
    {id: '20210330005205', name: 'Клиффорд', num: 100},
    {id: '20210330005209', name: 'Клиффорд', num: 110},
  ],
};

class Toggler extends Component {
  constructor(props) {
    super(props);
    console.log('[Toggler/index.js] constructor');
  }
  state = {
    buses: [],
    showBuses: false,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[Toggler/index.js] getDerivedStateFromProps', props);
    return state;
  }

  //   componentWillMount() {
  //     console.log("[Toggler/index.js] componentWillMount");
  //   }
  componentDidMount() {
    console.log('[Toggler/index.js] componentDidMount');
  }

  onlyBusesHandler = (id) => {
    console.log('Hi');
    const buses = [];
    BUSES.buses.map((bus, index) => {
      console.log('id = ' + id);
      console.log('bus.id = ' + bus.id);
      if (id === bus.id) {
        console.log('Sovpalo');
        buses[index] = bus;
        console.log(buses);
      }
    });

    this.setState({buses: buses});

    const doesShow = true;
    this.setState({showBuses: doesShow});
  };

  render() {
    console.log('[Toggler/index.js] render');
    let buses = null;
    let btnClass = '';

    if (this.state.showBuses) {
      buses = <Buses buses={this.state.buses} />;
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.buses.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.buses.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.Toggler}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {BUSES.buses.map((bus, index) => {
          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => {
                this.onlyBusesHandler(bus.id);
              }}
            >
              {bus.num}
            </button>
          );
        })}
        {buses}
      </div>
    );
  }
}

export default Toggler;
