import './styles/App.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path= '/'>
        <Home />
        </Route>
      </Switch> 
      <Footer/>
    </div>
    </BrowserRouter>
  );

}

export default App;
