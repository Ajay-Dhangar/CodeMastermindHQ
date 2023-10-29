---
id: url-params-query-params
title: URL params and query params
sidebar_position: 4
sidebar_label: 🧑‍💻URL and query params
---

### URL Parameters:
URL parameters are values included in the URL itself, typically denoted by a colon followed by the parameter name in Express. They are used to extract specific information from the URL.

#### Explanation:
In a URL like `http://example.com/users/:userId`, `:userId` is a URL parameter. When a user accesses a URL like `http://example.com/users/123`, you can extract the value `123` as the `userId` parameter.

#### Implementation in Express:

```javascript
const express = require('express');
const app = express();

// Define a route with a URL parameter
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, when a user accesses `/users/123`, the `userId` parameter is extracted, and the response will be "User ID: 123".

### Query Parameters:
Query parameters are additional key-value pairs in the URL following a question mark (`?`). They are used to send data to the server via the URL.

#### Explanation:
In a URL like `http://example.com/search?query=Node&category=Tutorials`, `query` and `category` are query parameters. They allow users to specify search terms or filter results.

#### Implementation in Express:

```javascript
const express = require('express');
const app = express();

// Define a route that handles query parameters
app.get('/search', (req, res) => {
  const query = req.query.query;
  const category = req.query.category;
  res.send(`Search Query: ${query}, Category: ${category}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, when a user accesses `/search?query=Node&category=Tutorials`, the query parameters `query` and `category` are extracted, and the response will be "Search Query: Node, Category: Tutorials".

You can test these examples by running the code and accessing the specified URLs in your browser or using tools like Postman.
