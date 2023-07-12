---
id: 18-13-adding-a-logout-link
title: 18.13 Adding a Logout Link
date: 2021-07-22 07:58:55
---

## New `Logout.js`

```jsx title="src\containers\Auth\Logout\Logout.js" {}
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
```

## `actions/index.js`

```jsx title="src\store\actions\index.js" {1}
export { auth, logout } from "./auth";
export {
  addIngredient,
  initIngredients,
  removeIngredient,
} from "./burgerBuilder";
export { fetchOrders, purchaseBurger, purchaseInit } from "./order";
```

## `App.js`

```jsx title="src\App.js" {5,19}
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
```
