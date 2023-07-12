---
id: 11-26-using-history-prop-to-redirect-replace
title: 11.26 Using History Prop To Redirect Replace
date: 2021-04-17 16:06:07
---

## `NewPost.js`

```jsx title="NewPost.js" {24-25}
import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Pash",
    submitted: false,
  };
  componentDidMount() {
    console.log(this.props);
  }
  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", post).then((response) => {
      console.log(response);
      this.props.history.replace("/posts");
      // this.setState({ submitted: true });
    });
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Pash">Pash</option>
          <option value="Mash">Mash</option>
          <option value="Chel">Chel</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
```
