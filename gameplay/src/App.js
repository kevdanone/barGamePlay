import './App.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path= '/'>
        <Home />
        </Route>
      </Switch> 
    </div>
    </BrowserRouter>
  );

}

export default App;
