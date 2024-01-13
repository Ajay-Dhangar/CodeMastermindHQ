import React from 'react';
import './styles.css';

const JavaScript: React.FC = () => {
  const topics = [
    { id: 0, title: '📝 Introduction', link: '/courses/javascript/01/introduction-js' },
    { id: 1, title: '📝 Course Overview', link: '/courses/javascript/01/course-overview' },
    { id: 2, title: '📝 What is JavaScript', link: '/courses/javascript/01/what-is-javascript' },
    { id: 3, title: '📝 Where to Write JavaScript', link: '/courses/javascript/01/where-to-write-javascript' },
    { id: 4, title: '📝 Values and Data Types', link: '/' },
    { id: 5, title: '📝 Values and Data Types Exercise', link: '/' },
    { id: 6, title: '📝 Strings', link: '/' },
    { id: 7, title: '📝 Index', link: '/' },
    { id: 8, title: '📝 Working with Strings Exercise', link: '/' },
    { id: 9, title: '📝 Operators', link: '/' },
    { id: 10, title: '📝 Operators Exercise', link: '/' },
    { id: 11, title: '📝 Comparison and Equality Operators', link: '/' },
    { id: 12, title: '📝 Expressions', link: '/' },
    { id: 13, title: '📝 Declaring and Assigning Variables', link: '/' },    
    { id: 14, title: '📝 Const Accessing Variables', link: '/' },
    { id: 15, title: '📝 Variables Exercise', link: '/' },
    { id: 16, title: '📝 What are Variables', link: '/' },
    { id: 17, title: '📝 Evaluating Code', link: '/' },
    { id: 18, title: '📝 Statements vs Expressions', link: '/' },
    { id: 19, title: '📝 Arrays', link: '/' },
    { id: 20, title: '📝 Useful Array Methods', link: '/' },
    { id: 21, title: '📝 Mutability', link: '/' },
    { id: 22, title: '📝 Mutable Immutable Data Exercise', link: '/' },
    { id: 23, title: '📝 Immutable Variables Values', link: '/' },  
    { id: 24, title: '📝 Variables Arrays', link: '/' },
    { id: 25, title: '📝 Objects Property Access', link: '/' },
    { id: 26, title: '📝 Visualizing Object Access', link: '/' },
    { id: 27, title: '📝 Objects Exercise', link: '/' },
    { id: 28, title: '📝 Object Methods', link: '/' },
    { id: 29, title: '📝 Object Methods Exercise', link: '/' },
    { id: 30, title: '📝 Built-in Objects', link: '/' },
    { id: 31, title: '📝 Tic Tac Toe Demo', link: '/' },
    { id: 32, title: '📝 JavaScript Pop Quiz Project Setup', link: '/' },
    { id: 33, title: '📝 DOM Exercise', link: '/' },
    { id: 34, title: '📝 Declaring Assigning a Variable', link: '/' },
    { id: 35, title: '📝 Setting Statement Element', link: '/' },
    { id: 36, title: '📝 Functions Parameters Arguments', link: '/' },
    { id: 37, title: '📝 Function Return Values', link: '/' },
    { id: 38, title: '📝 Creating Functions Exercise', link: '/' },
    { id: 39, title: '📝 Arrow Functions', link: '/' },
    { id: 40, title: '📝 Arrow Functions Exercise', link: '/' },
    { id: 41, title: '📝 Quiz Project Functions Exercise', link: '/' },
    { id: 42, title: '📝 Quiz Project Disable Enable Solution', link: '/' },
    { id: 43, title: '📝 Quiz Project IsCorrect Solution', link: '/' },
    { id: 44, title: '📝 Finding Elements in a Web Page', link: '/' },
    { id: 45, title: '📝 Boolean Q&A', link: '/' },
    { id: 46, title: '📝 Scope', link: '/' },
    { id: 47, title: '📝 Let Scope', link: '/' },
    { id: 48, title: '📝 Var vs Let', link: '/' },
    { id: 49, title: '📝 Event Listeners', link: '/' },
    { id: 50, title: '📝 Event Object', link: '/' },
    { id: 51, title: '📝 Events Exercise', link: '/' },
    { id: 52, title: '📝 Conditionals', link: '/' },
    { id: 53, title: '📝 Conditionals Exercise', link: '/' },
    { id: 54, title: '📝 Logical Ternary Operators', link: '/' },
    { id: 55, title: '📝 Length TextContent', link: '/' },
    { id: 56, title: '📝 Loops', link: '/' },
    { id: 57, title: '📝 Explanation Loop Project Exercise', link: '/' },
    { id: 58, title: '📝 Disable Loop Project Exercise', link: '/' },
    { id: 59, title: '📝 IsCorrect Project Exercise', link: '/' },
    { id: 60, title: '📝 Map Filter', link: '/' },
    { id: 61, title: '📝 Map Filter Exercise', link: '/' },
    { id: 62, title: '📝 Spread', link: '/' },
    { id: 63, title: '📝 Doggos Quiz Game Setup', link: '/' },
    { id: 64, title: '📝 While Loops', link: '/' },
    { id: 65, title: '📝 Doggo Quiz While Exercise', link: '/' },
    { id: 66, title: '📝 Doggo Quiz While Solution', link: '/' },
    { id: 67, title: '📝 Doggo Quiz While Review', link: '/' },
    { id: 68, title: '📝 SetTimeout', link: '/' },
    { id: 69, title: '📝 APIs Fetch', link: '/' },
    { id: 70, title: '📝 Working with Promises', link: '/' },
    { id: 71, title: '📝 Using Await with Promises', link: '/' },
    { id: 72, title: '📝 Destructuring Objects Arrays', link: '/' },
    { id: 73, title: '📝 Destructuring Exercise', link: '/' },
    { id: 74, title: '📝 Destructuring Solution Return Breed', link: '/' },
    { id: 75, title: '📝 Destructuring Solution Format String', link: '/' },
    { id: 76, title: '📝 Changing a Web Page', link: '/' },
    { id: 77, title: '📝 Async Functions', link: '/' },
    { id: 78, title: '📝 Async Function Exercise', link: '/' },
    { id: 79, title: '📝 Adding Choice Buttons Exercise', link: '/' },
    { id: 80, title: '📝 Adding Choice Buttons Solution', link: '/' },
    { id: 81, title: '📝 Render Quiz Exercise', link: '/' },
    { id: 82, title: '📝 Modules', link: '/' },
    { id: 83, title: '📝 Modules Q&A', link: '/' },
    { id: 84, title: '📝 Debugging', link: '/' },
    { id: 85, title: '📝 Browser Debugger', link: '/' },
    { id: 86, title: '📝 Try Catch Error Handling', link: '/' },
    { id: 87, title: '📝 Changing a Web Page Exercise', link: '/' },
    { id: 88, title: '📝 Frameworks vs Vanilla JavaScript', link: '/' },
    { id: 89, title: '📝 Wrapping Up', link: '/' }
  ];

  return (

    <div className="js-table-of-contents">
      <h2>JavaScript Course Table of Contents</h2>
      <hr />
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a className='js-table-of-content-items' href={topic.link}>{topic.title}</a>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default JavaScript;
