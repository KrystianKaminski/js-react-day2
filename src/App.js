import React from 'react';
import Button from './Button'

const names = ['Ala', 'Ola', 'Ela']
const namesList = names.map(name => <li key={name}>{name}</li>)

// 1. Display all names
// 2. Display all names in ul / li list


const App = (props) => (
 <div>
    <h1>{names}</h1>
    <ul>
      {namesList}
    </ul>
    <Button/>
  </div>
)
export default App;
