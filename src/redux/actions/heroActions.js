// This will contain all the actions
import {ActionTypes} from "../constants/action-types";

//esta selecciona todos los heroes para el display
export const setHeros = (heros) => {
    return {
        type: ActionTypes.SET_HEROS,
        payload: heros,
        
    };
};
//esta selecciona un heroe individual
export const selectedHero = (hero) => {
    return{
        type: ActionTypes.SELECTED_HERO,
        payload: hero,
    };
};
export const removeSelectedHero = (hero) => {
    return{
        type: ActionTypes.REMOVE_SELECTED_HERO,
        
    };
};
//team heroes
export const addTeamHero = (hero) => {
    return{
        type: ActionTypes.ADD_TEAM_HERO,
        payload: hero,
    };
};
export const removeTeamHero = (hero) => {
    return{
        type: ActionTypes.REMOVE_TEAM_HERO,
        payload: hero,
    };
};

