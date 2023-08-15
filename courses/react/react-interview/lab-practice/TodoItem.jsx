import React from 'react'

function TodoList() {
    const todoItems = [
      { id: 1, text: "Buy groceries" },
      { id: 2, text: "Finish homework" },
      { id: 3, text: "Go for a run" },
    ];
  
    return (
      <div>
        {todoItems.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </div>
    );
  }
  
  function TodoItem({ text }) {
    return <div>{text} </div>;
  }

export default TodoList
