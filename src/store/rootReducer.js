import { combineReducers } from 'redux';
import commentReducer from './comments/commentReducer'
import charactersReducer from "./characters/charactersReducer";

const rootReducer = combineReducers({
  comment: commentReducer,
  characters: charactersReducer,
});

export default rootReducer;