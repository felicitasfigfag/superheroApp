import { ActionTypes } from "../constants/action-types";
const initialState = {
  hero: [],
};
const teamState = {
  teamHero: [],
}
export const heroReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HEROS:
      return { ...state, hero: payload };
    default:
      return state;
  }
};


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

export const teamHeroReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TEAM_HERO:
            return [...state, payload];
    // case ActionTypes.REMOVE_TEAM_HERO:
    //   return {...state.pop(payload)};
    default:
      return state;
  }
};

//falta hacer el remove del array de team.

//viendo si ya esta en el team
// const fx = (() =>{
//   for(let i = 0; i > state.length; i++) {
//     if(state[i].id !== payload.id){
//       return [...state, payload]
//     }
//     else{
//       console.log("this one is already on your team")
//     }
//   };
// });
// fx();