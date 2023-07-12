---
id: 7-25-setting-state-correctly
title: 7.25 Setting State Correctly
date: 2021-04-08 20:11:38
---

Let's say that whenever our name changes, and we execute the nameChangedHandler, we want to count that, so we essentially count every keystroke made or every change made.

```jsx title="App.js" {11,21-26}

...

  state = {
    persons: [
      { id: "20210330005200", name: "Max", age: 28 },
      { id: "20210330005205", name: "Manu", age: 29 },
      { id: "20210330005209", name: "Stephanie", age: 26 },
    ],
    showCockpit: true,
    changeCounter: 0,
  };

...

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };
```
