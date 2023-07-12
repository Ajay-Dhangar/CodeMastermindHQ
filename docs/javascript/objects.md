---
id: objects
title: Objects
date: 2021-03-06 13:11:10
---

## Everything is Object

Everything (bar core types) in JavaScript is an object. Hash table lookups are time consuming in any JavaScript program.

JavaScript object are collection of name-value pairs `{name: 'Max'}`.

## Initialization & creation

Two basic ways of object initialization:

```js
var obj = new Object();
//or
var obj = {}; // object literal syntax
```

`var obj = {}` is the object literal syntax. It is preferred.

Initialization on creation via object literal syntax:

```js
var obj = {
  name: 'Carrot',
  _for: 'Max', // 'for' is a reserved word, use '_for' instead.
  details: {
    color: 'orange',
    size: 12,
  },
};

obj.details.color; // orange
obj['details']['size']; // 12
```

:::tip Starting ES5, you can use reserved words (like `for`, see above) as an object property name. Even without the quotes. :::

Since functions are objects too, you can first create a prototype (**Person**) via _function_ and define a new instance (**you**):

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
var you = new Person('You', 24);
// We are creating a new person named "You" aged 24.
```

## Access

Once created, an object properties can be accessed in one of two ways:

```js
// dot notation
obj.name = 'Simon';
var name = obj.name;

// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?');
obj[user] = prompt('what is its value?');
```

:::tip The second method has the advantage that the name of property is provided as a string, which means it can be calculated at run-time. :::

:::warning But this method prevents some JavaScript engine and minifier optimizations being applied. :::

Starting ES6, you can define the object keys with variables at creation:

```js
let param = 'size';
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

## Custom Objects

JavaScript is a prototype-based language that contains no class statement, as you'd find in C++ or Java (this is sometimes confusing for programmers accustomed to languages with a class statement). Instead, JavaScript uses functions as classes.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#custom_objects' class='external'>developer.mozilla.org</a>
