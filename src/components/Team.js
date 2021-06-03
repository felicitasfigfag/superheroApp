import React from 'react';
import {Link} from 'react-router-dom';
import TeamHero from './TeamHero';
import {useSelector, useDispatch} from 'react-redux';

const Team = () => {
const globalStats = {strength: 0, intelligence: 0, speed: 0, durability: 0, power: 0, combat: 0 }
//let {strength, intelligence, speed, durability, power, combat} = globalStats
const teamHero = useSelector((state) => state.teamHero);

//STATS
const stats = () =>{
    if(teamHero.length > 0){
        for(let i = 0; i < teamHero.length; i++){
            const powstat = teamHero[i].powerstats;
            globalStats.strength +=  parseInt(powstat.strength);
            globalStats.intelligence +=  parseInt(powstat.intelligence);
            globalStats.speed +=  parseInt(powstat.speed);
            globalStats.durability += parseInt(powstat.durability);
            globalStats.power += + parseInt(powstat.power);
            globalStats.combat +=  + parseInt(powstat.combat);}

        }else{
        console.log("no info")
    }
    
}
stats();
let arr = [];
let maxValue = 0;
for (let prop in globalStats){
    arr.push(globalStats[prop]);
    maxValue = Math.max.apply(Math.max, arr);
    console.log(maxValue)
}
// obtuve el maximo valor pero no pude reunir el valor con la key de objeto luego
//intente iterar de nuevo y comparar con el valor maximo pero no funciono.
for (let prop in globalStats){
    if( prop === maxValue){
        console.log("max value is ", globalStats[prop])
    }
}

    return (<>
        <div className="team-container">
        <Link to={`/`}>
            <button className="dt-btn">Back</button>
        </Link>
            <section className="team-left">
                <TeamHero />
            </section>
        <section className="team-rigth">
            <h1 className="dt-name">My team</h1>
                <ul className="dt-ul">
                    <li><h2 className="dt-name">Team stats</h2></li>
                    <li className="dt-stat"><b>Strength : </b> {globalStats.strength}</li>
                    <li className="dt-stat"><b>Intelligence : </b>{globalStats.intelligence}</li>
                    <li className="dt-stat"> <b>Speed : </b>{globalStats.speed}</li>
                    <li className="dt-stat"> <b>Durability : </b>{globalStats.durability}</li>
                    <li className="dt-stat"> <b>Power : </b>{globalStats.power}</li>
                    <li className="dt-stat"> <b>Combat : </b>{globalStats.combat}</li>
                </ul>
        </section>
        </div> 
        </>      
            )
                    }

export default Team
