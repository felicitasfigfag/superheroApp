import React from 'react';
import TeamHero from './TeamHero';
import {useSelector, connect} from 'react-redux';
import {removeTeamHero} from '../redux/actions/heroActions';


const Team = ({removeTeamHero}) => {
const globalStats = {strength: 0, intelligence: 0, speed: 0, durability: 0, power: 0, combat: 0 }
const team = useSelector((state) => state.team);


//STATS
const stats = () =>{
    if(team.length > 0){
        for(let i = 0; i < team.length; i++){
            const powstat = team[i].powerstats;
            for(let stat in powstat){
                if(powstat[stat] !== "null"){
                    globalStats[stat] += parseInt(powstat[stat])
                }
                else{
                    globalStats[stat] += 0
                }
            }
        }
}}
stats();


//Team Type
let arr = [];
let teamType = ""
const teamDetail = () => {
    if(team.length > 0){
        //defining type of team
        for (let stat in globalStats){
            arr.push(globalStats[stat]);
        }
        const maxValue = Math.max(...arr)
        for (let stat in globalStats){
            if(globalStats[stat] === maxValue){
                teamType = stat + " team";
            }
        }
    }
    //if the team is empty
else{
    teamType= ""
}}
teamDetail()

// Restrictions
const teamCount = { 
    good : 0,
    bad: 0
};
const restrictions = () =>{
    if(team.length > 0){
        for(let i = 0; i < team.length; i++){ 
            let alig = team[i].biography.alignment
            
            if(teamCount[alig] < 3){
                teamCount[alig] ++;
            }
            else if(teamCount[alig] >= 3){
            alert("You can only have 3 heros per alignment (Good/Bad) Delete a hero to add another one")
            removeTeamHero(team[(team.length -1)])
            }
        }
    }}
restrictions();

    return (<>
        <div className="team-container">
            <h1 className="dt-name">my team</h1>

            <section className="team-card-grid">
                <TeamHero />
            </section>

        <section className="team-stats">
                <ul className="dt-ul">
                    <li><h3 className="dt-name">Team stats</h3></li>
                    <li className="dt-stat"><b>Strength : </b> {globalStats.strength}</li>
                    <li className="dt-stat"><b>Intelligence : </b>{globalStats.intelligence}</li>
                    <li className="dt-stat"> <b>Speed : </b>{globalStats.speed}</li>
                    <li className="dt-stat"> <b>Durability : </b>{globalStats.durability}</li>
                    <li className="dt-stat"> <b>Power : </b>{globalStats.power}</li>
                    <li className="dt-stat"> <b>Combat : </b>{globalStats.combat}</li>
                </ul>
                <div className="counter">
                    <span className="count-info">
                        <p><b>You can have up to six Team members</b></p>
                        
                    </span>
                    <span className= "good-counter counters">
                        <p className="counter-desc">Good</p>
                        <p className="counter-value">{teamCount.good}/3</p>
                    </span>
                    <span className= "bad-counter counters">
                        <p className="counter-desc">Bad</p>
                        <p className="counter-value">{teamCount.bad}/3</p>
                    </span>
                </div>
                <h5 className="team-type">{teamType}</h5>
        </section>
        </div> 
        </>      
            )
        }
        const mapDispatchToProps = dispatch => {
            return {
                removeTeamHero: (id) => dispatch(removeTeamHero(id)),
                
            }}
    
export default connect (null, mapDispatchToProps)(Team)
