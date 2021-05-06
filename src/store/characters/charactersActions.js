import axios from 'axios';
import {FETCH_DATA} from "./charactersActionTypes";

export const fetchCharacters = () => {
  return dispatch => {
    axios.get('https://swapi.dev/api/people')
      .then(r => {
        dispatch({
          type: FETCH_DATA,
          payload: r.data.results
        })
      })
  }
}