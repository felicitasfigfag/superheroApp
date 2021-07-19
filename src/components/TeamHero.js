import React from 'react';
import {useSelector} from 'react-redux';
import {removeTeamHero} from '../redux/actions/heroActions';
import {connect} from "react-redux";

const TeamHero = ({removeTeamHero}) => {
    const teamHero = useSelector((state) => state.team);

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
                
                <div className={teamHero.biography.alignment + "-teamHero card-back"}>
                    <span className="team-header">
                        <h1 className="heroName">{teamHero.name}</h1>
                    </span>
                    <p className="stat team-stat"><b> Strength:</b> {teamHero.powerstats.strength} </p>
                    <p className="stat team-stat"> <b>Intelligence:</b> {teamHero.powerstats.intelligence}</p>
                    <p className="stat team-stat"> <b>Power:</b> {teamHero.powerstats.power}</p>
                    <p className="stat team-stat"> <b>Speed:</b> {teamHero.powerstats.speed}</p>
                    <p className="stat team-stat"> <b> {teamHero.biography.alignment}</b></p>
                </div>
            
            </div>
                <button className="dt-btn team-btn" onClick={() => removeTeamHero(teamHero)}>x</button>
        </article>
            )):
            (<div>Todavía no hay heroes en tu equipo</div>)
        }
            </>)
                }


        const mapDispatchToProps = dispatch => {
            return {
                removeTeamHero: (hero) => dispatch(removeTeamHero(hero)),
                
            }}
            

export default connect(null, mapDispatchToProps)(TeamHero);

