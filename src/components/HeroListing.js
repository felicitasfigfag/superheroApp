import React, {useState} from 'react';
import { useDispatch} from "react-redux";
import HeroComponent from "./HeroComponent";
import SearchBar from './SearchBar';
import {setHeros} from '../redux/actions/heroActions';
import axios from 'axios';

const HeroListing = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();


         //esta maneja el cambio en el input y dispara searchSuperHeros cuando 
        //recibe mas de 2 letras
        function handleChange (e) {
            const searchTerm = e.target.value;
            setSearchText(searchTerm);
            if (searchTerm.length === 0) {
                setSearchText([]);
            }
            else if (searchTerm.length > 2) {
                searchSuperHeroes();
        }}

    //esta obtiene el valor de input, busca en la api y lo despacha a la store
    const searchSuperHeroes = async () => {
        const response = await axios
            .get(`https://www.superheroapi.com/api.php/1046974402498670/search/${searchText}`)
            .catch((err) => {
                console.log("Err", err);
                });
                
            dispatch(setHeros(response.data));
        };

        return (<div> 
            <SearchBar handleChange = {handleChange} searchText = {searchText}/>
                    <div className= "card-container">
                        <HeroComponent/> 
                    </div>
                </div>)
};

export default HeroListing

