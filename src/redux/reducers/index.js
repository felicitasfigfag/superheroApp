// Here we'll have all the reducers
import {combineReducers} from 'redux';
import { heroReducer, selectedHeroReducer, teamHeroReducer} from './heroReducer';

//we combine the reducers here
//constant of all the reducers. Combined reducers
const reducers = combineReducers ({
    allHeros: heroReducer,
    selectedHero: selectedHeroReducer,
    team: teamHeroReducer,
});

export default reducers;

// de aca borre la importacion de productReducer y tmb en reducers
//  allProducts: productReducer,
// productReducer (import)

// hero: selectedHeroReducer,
//     team: teamHeroReducer,
