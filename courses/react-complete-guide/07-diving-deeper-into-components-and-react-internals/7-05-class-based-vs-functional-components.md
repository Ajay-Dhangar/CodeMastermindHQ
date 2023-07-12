---
id: 7-05-class-based-vs-functional-components
title: 7.05 Class Based Vs Functional Components
date: 2021-04-07 11:39:41
---

## index.js

```jsx title="index.js" {8}
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App appTitle="Person Manager" />,
  document.getElementById("root")
);
registerServiceWorker();
```

## App.js

```jsx title="App.js" {6}
...

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
```

## Cockpit.js

```jsx title="Cockpit.js" {5}
...

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
```
