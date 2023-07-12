---
id: 14-21-result-practice
title: 14.21 Result Practice
date: 2021-07-12 12:52:50
---

## Installing `redux` and `react-redux`

```bash npm2yarn
npm install --save redux react-redux
```

## index.js

```jsx title="index.js" {3-4,6,8,10-17}
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
```

## Persons.js

```jsx title="Persons.js" {2,4-5,11-12,17,25-39}
import React, { Component } from "react";
import { connect } from "react-redux";
import AddPerson from "../components/AddPerson/AddPerson";
import Person from "../components/Person/Person";
import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onRemovedPerson: (id) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
```

## New `reducer.js`

```jsx title="reducer.js" {}
import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person.id !== action.personId
        ),
      };
    default:
  }
  return state;
};

export default reducer;
```

## New `actions.js`

```jsx title="App.js" {}
export const ADD_PERSON = "ADD_PERSON";
export const REMOVE_PERSON = "REMOVE_PERSON";
```
