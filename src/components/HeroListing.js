import React, {useState} from 'react';
import { useDispatch} from "react-redux";
import HeroComponent from "./HeroComponent";
import SearchBar from './SearchBar';
import {setHeros} from '../redux/actions/heroActions';
import axios from 'axios';
import {Link} from "react-router-dom";


const HeroListing = () => {
    //const heros = useSelector((state) => state);
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    //esta obtiene el valor de input, busca en la api y lo despacha a la store
    const searchSuperHeroes = async () => {
        const response = await axios
            .get(`https://www.superheroapi.com/api.php/1046974402498670/search/${searchText}`)
            .catch((err) => {
                console.log("Err", err);
                });
                
            dispatch(setHeros(response.data));
        };
        //esta maneja el cambio en el input y dispara la de arriba cuando 
        //recibe mas de 2 letras
    function handleChange (e) {
        const searchTerm = e.target.value;
        setSearchText(searchTerm);
        if (searchTerm.length === 0) {
            setSearchText([]);
        }
        if (searchTerm.length > 2) {
            searchSuperHeroes();
    }
        }
        return (<div> 
            <SearchBar handleChange = {handleChange} searchText = {searchText}/>
            <Link to={'/team'}>
            <button className="dt-btn nav-btn">My team</button>
            </Link>
                    <div className= "card-container">
                        <HeroComponent/> 
                    </div>
                </div>)
};

export default HeroListing

