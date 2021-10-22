import React, { Fragment } from 'react';
//import logo from './logo.svg';
import PagInicio from './componentes/inicio.jsx'
import './index.css';
import './components.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>

        <Switch>
          <Route exact path="/">
            <PagInicio/>

          </Route>
        </Switch>

      </Router>

    </Fragment>
    
  )
  
}

export default App;
