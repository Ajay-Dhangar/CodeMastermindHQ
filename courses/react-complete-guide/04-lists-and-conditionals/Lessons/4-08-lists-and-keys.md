---
id: 4-08-lists-and-keys
title: 4.08 Lists And Keys
date: 2021-03-30 00:35:48
---

Key property helps React update the list efficiently.

ID doesn't have to be a number, it can be anything unique, so here I'm just hammering on my keyboard to get some unique IDs.

```jsx title="App.js" {5-7,20}
...
class App extends Component {
  state = {
    persons: [
      { id: "20210330005200", name: "Max", age: 28 },
      { id: "20210330005205", name: "Manu", age: 29 },
      { id: "20210330005209", name: "Stephanie", age: 26 },
    ],
  };
...
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
              />
            );
          })}
        </div>
      );
    }
...
```

But behind the scenes it's now able to do that in a more efficient way which of course is super important.
