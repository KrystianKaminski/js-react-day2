import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'

import Button from './Button'
import DisplayParam from './DisplayParam'


// 1. Display all names
// 2. Display all names in ul / li list


const App = (props) => (
  <div>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/route-1">route-1</Link></li>
          <li><Link to="/route-2">route-2</Link></li>
          <li><Link to="/route-3">route-3</Link></li>
        </ul>
      <div>
        <Route path="/" exact={true} component={() => <Button label="NIC!"/>} />
        <Route path="/route-1" component={Route1} />
        <Route path="/route-2" component={Route2} />
        <Route path="/route-3" component={Route3} />
        <Route path="/param/:uid" component={DisplayParam} />
      </div>
    </div>
    </Router>
  </div>
)
export default App;
