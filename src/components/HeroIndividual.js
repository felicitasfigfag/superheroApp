import React, {useState} from 'react';

//Aca manejamos individualmente a cada heroe
//primero como resultado de la busqueda

function HeroIndividual(props) {
  const {data = []} = props;
  //state de selectHero(heroindividual)
  const [selectedHero, setSelectedHero] = useState([]);

function getDivs(){
        let divsOnDisplay = [document.querySelectorAll('.card')]
        console.log(divsOnDisplay)
      }
      
  async function getHero (heroData) {
      console.log('you selected hero : ', heroData)
      getDivs()
    }

      
  
  return (
    <div className="card">
      <div className="add">
          <button 
          className="add-btn" 
          onClick={() => {getHero(data)}}> 
          + </button>
      </div>
      <div className="card-inner">
      
      <div className="card-front">
        <img src={data.image.url} alt="super pic" />
        
      </div>
      <div className="card-back">
        <h1>{data.name}</h1>
        <ul>
          {data.biography['full-name']}
          <li>
            <strong> Strength: </strong> {data.powerstats.strength}
          </li>
          <li>
            <strong> Speed: </strong>  {data.powerstats.speed}
          </li>
          <li>
            <strong> Power </strong>  {data.powerstats.power}
          </li>        
        </ul>
      </div>
      </div>
      
    </div>
  );
}

export default HeroIndividual;