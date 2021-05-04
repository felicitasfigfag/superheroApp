import React , {useState} from 'react';
import '../App2.css';
import 'bootstrap/dist/css/bootstrap.css';
import Heros from './Heros.js';
import SearchBar from './SearchBar.js';
import Header from './Header.js'


const Home = () => {
    
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
        <React.Fragment>
        <Header /> 
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <Heros superheroData={superheroData} /> 
        </React.Fragment>
        
    )
}

export default Home
