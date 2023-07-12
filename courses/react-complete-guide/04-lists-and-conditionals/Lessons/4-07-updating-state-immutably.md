---
id: 4-07-updating-state-immutably
title: 4.07 Updating State Immutably
date: 2021-03-29 23:32:07
---

The flaw of this approach is that in JavaScript, objects and arrays are reference types, so when I get persons from my state as I do here I actually get a pointer to the original person’s object managed by React, to the original state I should say. If I then `splice` it here, I already `mutate` this original data and whilst it does work without throwing an error, this is not really how you should do it, this can lead to unpredictable apps and is definitely a bad practice.

## Good Practice

You should always update state in an immutable fashion, so without mutating the original state first. Create a copy, change that and then update the state with that state.

### slice() method

A good practice is to create a copy of your persons array before manipulating it and a simple way of doing this is by calling the `slice` method. Slice without arguments simply copies the full array and returns a new one which is then stored here.

```jsx title="App.js" {3}
...
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };
...
```

And you can now safely edit this new one and then update to react state with your new array.

### spread operator `[...]`

An alternative to this approach would be to use it a ES6 feature, the `spread` operator. It spreads out the elements in this array into a list of elements which simply then gets added to this array, so that now we have an array, a new array, with the objects from the old array but not the old array itself.

```jsx title="App.js" {3}
...
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
...
```

So this is basically an equivalent to the `slice` approach, use whichever one you prefer, this is the more modern one, and you will see this `spread` operator more often throughout the course.
