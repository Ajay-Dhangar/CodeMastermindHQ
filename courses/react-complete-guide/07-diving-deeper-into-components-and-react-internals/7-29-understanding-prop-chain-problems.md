---
id: 7-29-understanding-prop-chain-problems
title: 7.29 Understanding Prop Chain Problems
date: 2021-04-08 23:39:03
---

## From A -> B -> C -> D

Let's say now we also manage some authentication status in this application. And I want to output whether we're authenticated down here in my person component, I want to manage the authentication in the cockpit though. So in the cockpit component, I'll add another extra button...

```jsx title="Cockpit.js" {10}
...

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
```

## App.js

```jsx title="App.js" {10,15-17,27,41}
...
  state = {
    persons: [
      { id: "20210330005200", name: "Max", age: 28 },
      { id: "20210330005205", name: "Manu", age: 29 },
      { id: "20210330005209", name: "Stephanie", age: 26 },
    ],
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

...

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {

...

        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (

...

          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
```

## Persons.js

```jsx title="Persons.js" {10}
...

      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}
export default Persons;
```

## Person.js

```jsx title="Person.js" {5}
...

    return (
      <Fragment>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

...

export default withClass(Person, classes.Person);
```

Yet I am not really happy with my set up here, because we're passing down props across multiple levels, and, for example, the persons component really only forwards the authentication status. It receives is authenticated as a prop, but it doesn't really care and this is not so great, because it simply leads to extra redundancy, and it makes our components a bit less reusable, because wherever we're using the persons component, we have to make sure we pass in isAuthenticated, so that we can forward it and there.

We have a feature called `context` which helps us solve the issue.
