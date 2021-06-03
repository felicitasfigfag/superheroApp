import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";


const HeroComponent = () => {
    const heros = useSelector((state) => state.allHeros.hero);
    
    return (<>
    {
        (heros.results != null && heros.results.length > 0)
        ?
        heros.results.map(hero => (
            <div className="card" key={hero.id}>
                <Link to={`/hero/${hero.id}`}>
                <div className="card-inner">
                    <div className="card-front">
                        <img src={hero.image.url} alt={hero.name}  />
                    </div>
                    <div className="card-back">
                        
                        <h1>{hero.name}</h1>
                        <p className="stat"><b> Strength:</b> {hero.powerstats.strength}</p>
                        <p className="stat"> <b>Intelligence:</b> {hero.powerstats.intelligence}</p>
                        <p className="stat"> <b>Speed:</b> {hero.powerstats.speed}</p>
                        <p className="stat"> <b>Power:</b> {hero.powerstats.power}</p>
                        
                    </div>
                </div>
                </Link>
            </div>
        ))
        :
        (<div>Comenza a armar tu equipo buscando superheroes!</div>)
    }
            </>)
}

export default HeroComponent;

