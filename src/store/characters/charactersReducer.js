import {FETCH_DATA} from "./charactersActionTypes";
const initialState = []
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload]
    default:
      return initialState
  }
}

export default charactersReducer;