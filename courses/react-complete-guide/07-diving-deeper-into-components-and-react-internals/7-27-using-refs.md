---
id: 7-27-using-refs
title: 7.27 Using Refs
date: 2021-04-08 21:55:45
---

Let's say when we render all our persons here, the last person should automatically receive focus.

## way # 1

```jsx title="Person.js" {4-6,17-19}
...

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={(inputEl) => {
            this.inputElement = inputEl;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}
```

## way # 2

Since React 16.3

```jsx title="Person.js" {4-11,25}
...

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

...

export default withClass(Person, classes.Person);
```

So you can use either approach, either with `React.createRef()` which is the more modern approach or by using that function above to get direct access to the element, this is the older approach and therefore it also works in older versions of React, and it's up to you to use which version you want depending on which version, the version of React you're using, is allowing you to use.
