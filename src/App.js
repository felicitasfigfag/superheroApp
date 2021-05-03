import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Heros from './components/Heros';
import Header from './components/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login'
//My token: 1046974402498670


function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);
  
  // fx search
  
  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/1046974402498670/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)
    setSuperheroData(data.results);    
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="container">
      <div className="main">
        <Header /> 
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <Heros superheroData={superheroData} />
        {/* <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
        </Router> */}
      </div>
    </div>
  );
  }


export default App;
