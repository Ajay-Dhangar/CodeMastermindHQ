---
id: 12-11-0-fetching-orders
title: 12.11.0 Fetching Orders
date: 2021-04-20 13:37:06
---

:::warning
Fucking Docusaurus!!!
With name: `12-11-fetching-number.md` it doesn't work!
:::

## `Orders.js`

```jsx title="Orders.js" {2,4,7-28,38}
import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        // console.log("res.data:", res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}
export default withErrorHandler(Orders, axios);
```
