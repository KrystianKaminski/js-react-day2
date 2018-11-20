import React from 'react';

const names = ['Ala', 'Ola', 'Ela']

// 1. Display all names
// 2. Display all names in ul / li list


const App = (props) => (
 <div>
    <h1>{names}</h1>
    <ul>
      {names.map(name => (
        <li key={name.toString()}>{name}</li>
      ))}
    </ul>
  </div>
)
export default App;
