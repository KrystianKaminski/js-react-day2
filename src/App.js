import React from 'react';
import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'

const names = ['Ala', 'Ola', 'Ela']
const namesList = names.map(name => <li key={name}>{name}</li>)

// 1. Display all names
// 2. Display all names in ul / li list


const App = (props) => (
  <div>
    <Route1 />
    <Route2 />
    <Route3 />
  </div>
)
export default App;
