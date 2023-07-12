---
id: 4-06-lists-and-state
title: 4.06 Lists And State
date: 2021-03-29 22:58:56
---

## Bad Practice

First, I will fetch all the persons, so I will reach out to this state persons, and then I want to create a new version of that person’s array. I simply want to call persons `splice` and I want to start splicing a person index and splice one element. This simply removes one element from the array and thereafter I can call `this.setState` and set persons to persons to my persons constant which was updated though by splicing one element.

And in case you’re wondering how I can edit a constant, keeps in mind arrays and objects are reference types, so I didn’t assign a new value to the constant, it is only holding a pointer, I only changed the element it was pointing to, that’s just some general JavaScript knowledge though.

```jsx title="App.js" {2-6,19,22}
...
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

...

  render() {

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
              />
            );
          })}
        </div>
      );
    }
...
```
