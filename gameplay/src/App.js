import './App.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'

const Title = styled.h1`
  font-size: 2rem;
  color: green;
`

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/'>
        <Header />
        </Route>
      </Switch> 
    </div>
    </BrowserRouter>
  );

}

export default App;
