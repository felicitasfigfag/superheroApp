import { ActionTypes } from "../constants/action-types";


const initialState = {
  hero: [],
  team: [],
  teamCount: { 
    good : 0,
    bad: 0
  },
};


//setheros
export const heroReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HEROS:
      return { ...state, hero: payload };
    default:
      return state;
  }
};

//selected hero
export const selectedHeroReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_HERO:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_HERO:
      return {};
    default:
      return state;
  }
};

//.payload = heroe // team = team state // teamCount = contador // alig = good/bad
//este recibe en action el heroe (payload) y el aligmnent (alig)

//add team hero
export const teamHeroReducer = (state = initialState.team, action) => { 

  switch (action.type) {
    case ActionTypes.ADD_TEAM_HERO:
      return [...state ,action.payload];
      

    case ActionTypes.REMOVE_TEAM_HERO:
      state = state.filter((item) => item.id !== action.id);
      return state;

    default:
      return state;
  }
}
