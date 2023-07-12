---
id: 13-03-creating-custom-dynamic-input-components
title: 13.03 Creating Custom Dynamic Input Components
date: 2021-04-20 18:52:55
---

:::warning
Now this error message `inputtype="input"` (not `inputType="input"`) is stemming from a change in react 16, it does pass on all props here and input type due to its casing is not reusable as a default HTML prop because HTML in the dom is case-insensitive, therefore it throws this error.

:::

## New `Input.js`

```jsx title="Input.js" {}
import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
```

## New `Input.module.css`

```jsx title="Input.module.css" {}
.Input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.Label {
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
}

.InputElement {
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.InputElement:focus {
  outline: none;
  background-color: #ccc;
}
```

## `ContactData.js`

```jsx title="ContactData.js" {4,49-50,55-56,61-62,67-68}
import React, { Component } from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Pash Pa",
        address: {
          street: "Teststreet 1",
          zipCode: "34234",
          country: "Russia",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData
```

## `ContactData.module.css`

```jsx title="ContactData.module.css" {}
.ContactData {
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
}

// Remove .Input {}

@media (min-width: 600px) {
  ContactData {
    width: 500px;
  }
}

```
