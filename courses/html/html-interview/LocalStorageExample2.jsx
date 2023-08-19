import React from 'react';

function LocalStorageExample2() {
    // Try to get the user's name from Local Storage
  let yourName = localStorage.getItem("user_name");
  
  // Check if it exists
  if (yourName) {
    alert("Welcome back, " + yourName + "!");
  } else {
    // If it's not in Local Storage, ask the user for their name
    yourName = prompt("What's your name?");
    
    // Save the name in Local Storage
    localStorage.setItem("user_name", yourName);
  }

  // Render your React component
  return (
    <div>
      <h1>Welcome to our website!</h1>
      {/* Your other JSX elements go here */}
    </div>
  );
}


export default LocalStorageExample2;
