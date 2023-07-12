---
id: 4-09-flexible-lists
title: 4.09 Flexible Lists
date: 2021-03-30 01:11:12
---

<a href='https://github.com/PaPa31/react-complete-guide/commit/7591ac7163728d3240252289db5e1d6b772493ea' class='external'>github.com: 7591ac7163728d3240252289db5e1d6b772493ea</a>

So now we get a truly flexible component here, a truly flexible application taking advantage of modern features to render this list efficiently and interact with it efficiently. Super important.

```jsx  title="App.js" {1-4,6-8,10,12,14-15,18,40}
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
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
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
```

A lot of code but the best way of doing it, the most efficient way without mutating the state.
