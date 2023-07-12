---
id: 4-03-handling-javascript-way
title: 4.03 Handling Javascript Way
date: 2021-03-29 20:05:53
---

Cut out all the toggle JSX code. And assign it to the variable. With a condition. Then take that variable and output it as JSX code with single curly braces.

```jsx title="App.js" {11,13-14,43}
...
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

...

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
...
```

This is actually the preferred way of outputting conditional content, and it’s the way I would recommend using.
