import React from 'react';
import {useSelector} from 'react-redux';


const TeamHero = () => {
    const teamHero = useSelector((state) => state.teamHero);
    return (<>
        {
            (teamHero != null && teamHero.length > 0)
            ?
            teamHero.map(teamHero => (
        <article className="card team-card" key={teamHero.id}>
            <div className="card-inner team-inner">
                <div className="card-front">
                    <img className="team-img" src={teamHero.image.url} alt='#'  />
                </div>
                <div className="card-back">
                    <span className="team-header">
                        <h1>{teamHero.name}</h1>
                        <button className="dt-btn team-btn">x</button>
                    </span>
                    <p className="stat team-stat"><b> Strength:</b> {teamHero.powerstats.strength} </p>
                    <p className="stat team-stat"> <b>Intelligence:</b> {teamHero.powerstats.intelligence}</p>
                    <p className="stat team-stat"> <b>Power:</b> {teamHero.powerstats.power}</p>
                    <p className="stat team-stat"> <b>Speed:</b> {teamHero.powerstats.speed}</p>
                </div>
            </div>
        </article>
            )):
            (<div>Todavía no hay heroes en tu equipo</div>)
        }
            </>)
                }

export default TeamHero
