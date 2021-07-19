import React from 'react';
import './App(hero).css';
import Header from './components/Header';
import HeroListing from './components/HeroListing';
import HeroDetail from './components/HeroDetail';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Team from './components/Team'
// import Login from './components/Login'
//My token: 1046974402498670

function App() {
      return (
        <div className="container">
          <Router>
            <Header />
            <Switch>
              {/* <Route exact path="/"  component ={Login}/> */}
              <Route exact path="/" component={HeroListing}/>
              <Route exact path="/hero/:heroId" component={HeroDetail}/>
              <Route exact path="/team" component={Team}/>
              <Route>404 not found!</Route>
            </Switch>
          </Router>
        </div>
        );}


export default App;
