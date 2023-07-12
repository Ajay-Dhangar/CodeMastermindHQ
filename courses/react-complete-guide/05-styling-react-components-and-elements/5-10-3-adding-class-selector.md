---
id: 5-10-3-adding-class-selector
title: 5.10.3 Adding Class Selector
date: 2021-04-04 21:45:55
---

Another way of implementing this would be to say well instead of my app class every button should have to stall. So here we could say app button like this using the button tag selector here. Not a class. This is just a tax collector now just app as a class selector.

```jsx title="App.css" {13,22,27,31}
.App {
  text-align: center;
}

.red {
  color: red;
}

.bold {
  font-weight: bold;
}

.App button {
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
}

.App button:hover {
  background-color: lightgreen;
  color: #333;
}

.App button.Red {
  background-color: red;
}

.App button.Red:hover {
  background-color: salmon;
}

```

```jsx title="App.js" {6,25,40}

...

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
```

## Final file

```jsx title="Final file" {}
<style type="text/css">
.App__App__1o-Fp {
  text-align: center;
}

.App__red__lKdi_ {
  color: red;
}

.App__bold__1Ylab {
  font-weight: bold;
}

.App__App__1o-Fp button {
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
}

.App__App__1o-Fp button:hover {
  background-color: lightgreen;
  color: #333;
}

.App__App__1o-Fp button.App__Red__2T8IA {
  background-color: red;
}

.App__App__1o-Fp button.App__Red__2T8IA:hover {
  background-color: salmon;
}
</style>

...

  <div class="App__App__1o-Fp">
    <h1>Hi, I'm a React app!</h1>
    <p class="">This is really working!</p>
    <button class="">Toggle Persons</button>
    <div></div>
  </div>

  ---
    //  With clicked button
    <button class="App__Red__2T8IA">Toggle Persons</button>
```
