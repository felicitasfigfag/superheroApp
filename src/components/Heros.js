import React from 'react';
import HeroIndividual from './HeroIndividual';

//Aqui recibimos y mostramos los resultados de busqueda
function Heros(props) {
  const {superheroData = [], setSelected} = props;

  return (
    <section className="cards">
      {superheroData.map(superhero =>
        <HeroIndividual data={superhero} key={superhero.id} setSelectedFx={setSelected}/>
      )}
    </section>
  );
}

export default Heros;
