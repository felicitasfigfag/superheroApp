import React , {useState} from 'react';

//Aca manejamos individualmente a cada heroe
//primero como resultado de la busqueda

function HeroIndividual(props) {
  const {data = []} = props;

  const [selectedHero, setSelectedHero] = useState([]);

  function getHero (heroData) {
    console.log('you selected hero : ', heroData)
    setSelectedHero([...selectedHero, heroData])
    console.log(selectedHero)
  }

  return (
    <div className="card" >
      <div className="add">
          <button 
          className="add-btn" 
          id={data.id}
          onClick={ () => getHero(data)}>
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
