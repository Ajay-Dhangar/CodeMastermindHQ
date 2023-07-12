---
id: 5-03-setting-styles-dynamically
title: 5.03 Setting Styles Dynamically
date: 2021-04-03 19:21:14
---

You can manipulate the style object with any JavaScript code you want and in the end when you then bind it here, it will simply apply this no matter how you edited it.

```jsx title="App.js" {21}
    ...
    let persons = null;

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

      style.backgroundColor = "red";
    }

    return (
      <div className="App">
    ...
```
