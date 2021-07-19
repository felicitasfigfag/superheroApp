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
//----------------------------
//            TEAM
//----------------------------


export const addTeamHero = (heroID) => {
    return{
        type: ActionTypes.ADD_TEAM_HERO,
        payload: heroID,
        alig: heroID.biography.alignment
    };
};

export const removeTeamHero = (hero) => {
    return {
        type: ActionTypes.REMOVE_TEAM_HERO,
        id: hero.id,
        alignment: hero.biography.alignment
    };
};

export const adjustQty = (itemID, value) => {
    return {
        type: ActionTypes.ADJUST_TEAM_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}
export const loadCurrentHero = (hero) => {
    return {
        type: ActionTypes.LOAD_CURRENT_HERO,
        payload: {
            payload: hero
        }
    }
}
