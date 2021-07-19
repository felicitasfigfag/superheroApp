import React, {useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {selectedHero, removeSelectedHero, addTeamHero} from '../redux/actions/heroActions'
import {Link} from "react-router-dom";

const HeroDetail = () => {
    const hero = useSelector((state) => state.selectedHero);
    const { name, image, appearance, biography} = hero;
    const {heroId} = useParams();
    const dispatch = useDispatch();
    
    //obtiene ID y busca en la api
    const fetchHeroDetail = async () => {
        const response = await axios
        .get(`https://www.superheroapi.com/api.php/1046974402498670/${heroId}`)
        .catch((err) =>{
        console.log( "error ", err);
        });
    dispatch(selectedHero(response.data))
};

//se activa cuando cambia el id
useEffect(() => {
    if(heroId !== "") fetchHeroDetail();
    return () => {
        dispatch(removeSelectedHero())
    }; 
    },[heroId])

    const handleClick = (() => {
        dispatch(addTeamHero(hero))
        
    })

    return (
        <div className="dt-container">
            {Object.keys(hero).length === 0 ? (
                <div>...Loading</div>
                    ) : (
                
                    
                    <span className={biography.alignment}>
                        
                            <Link to={`/`}>
                                <button className="dt-btn">Back</button>
                            </Link>
                            <img className="dt-img" src={image.url} />
                        
                            <div className="dt-content">
                                <h1 className="dt-name">{name}</h1>
                                <ul className="dt-ul">
                                    <li className="dt-stat"> <b>Full Name: </b>  {biography["full-name"]}</li>
                                    <li className="dt-stat"> <b>Weight: </b>  {appearance.weight[0]}</li>
                                    <li className="dt-stat"> <b>Height: </b>  {appearance.height[1]}</li>
                                    <li className="dt-stat"> <b>Alias: </b>  {biography.aliases[0]}</li>
                                    <li className="dt-stat"> <b>Eye color:  </b> {appearance["eye-color"]}</li>
                                    <li className="dt-stat"> <b>Hair color  </b> {appearance["hair-color"]}</li>
                                    
                                </ul>
                                <Link to={'/team'} >
                                <button className="dt-btn" onClick={handleClick}>Add to my Team</button>
                                </Link>
                            </div>
                        
                    </span>
                    
                    
            )}
        </div>
    );
};
export default HeroDetail;
