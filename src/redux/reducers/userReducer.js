
import {
  ADD_USER,
  GET_SELECT_USER,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_LOADING,
  GET_ALL_USER_SUCCESS,
} from "../actions/userAction";


const INIT_STATE = {
  users: [],
  isLoading: false,
  error: "",
  usersEdit:[]
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case GET_ALL_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_USER:
      return{
        ...state,
        users:{...state.users,...action.payload},
        usersEdit:{...state.usersEdit}
      }
    case GET_SELECT_USER:
        return{
          ...state,
          usersEdit:action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
