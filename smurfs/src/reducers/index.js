/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   error: null 

   updatingSmurf: false
   deletingSmurf: false
   
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your name spacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurf: true,
        addingSmurf: false,
        error: " "
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurf: false,
        addingSmurf: false,
        error: " "
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurf: false,
        addingSmurf: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        fetchingSmurf: false,
        addingSmurf: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurf: false,
        addingSmurf: false,
        error: ""
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurf: false,
        addingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};
