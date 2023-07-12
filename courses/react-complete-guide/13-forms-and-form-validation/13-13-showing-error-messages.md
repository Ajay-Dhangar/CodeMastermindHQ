---
id: 13-13-showing-error-messages
title: 13.13 Showing Error Messages
date: 2021-04-20 16:35:53
---

The form inputs (`<Input />`  component) already receives the information whether it's invalid or not. You could of course easily add some conditionally rendered element inside of that component.

For example (inside `<Input />`  component function):

```jsx
// all the other code from the videos

let validationError = null;
if (props.invalid && props.touched) {
    validationError = <p>Please enter a valid value!</p>;
}

return (
     <div className={classes.Input}>
         <label className={classes.Label}>{props.label}</label>
         {inputElement}
         {validationError}
     </div>
 );
```

This could of course be finetuned. You could also pass the value type (e.g. `"email address"` ) as a prop:

```jsx
validationError = <p>Please enter a valid {props.valueType}</p>;
```

You could also receive the complete error message as a prop:

```jsx
validationError = <p>{props.errorMessage}</p>;
```

And of course, also don't forget to style the messages if you want to do that:

```jsx
validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
```

In your CSS file, you could have:

```jsx
.ValidationError {
    color: red;
    margin: 5px 0;
} 
```
