---
id: 4-02-rendering-content-conditionally
title: 4.02 Rendering Content Conditionally
date: 2021-03-15 01:31:48
---

[JSX Conditionals Learning Card PDF](../pdf/4-02-jsx-conditionals-learning-card.pdf)

## JSX way

Checks condition with a ternary expression. And handles event using the handler method.

```jsx title="App.js" {2-5,13,16,35}
...
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
...
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (     // start ternary expression
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
        ) : null}   // end ternary expression
      </div>
...
```
