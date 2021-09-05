import axios from "axios";

// Ten hanh dong
export const GET_ALL_USER_LOADING = "user@GET_ALL_USER_LOADING";
export const GET_ALL_USER_SUCCESS = "user@GET_ALL_USER_SUCCESS";
export const GET_ALL_USER_FAILURE = "user@GET_ALL_USER_FAILURE";
export const ADD_USER ="user@ADD_USER";
export const GET_SELECT_USER ="user@GET_SELECT_USER";

export const getAllUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_USER_LOADING });
    try {
      const dulieu = await axios.get(`http://localhost:3000/users`);
      if (dulieu.data.length > 0) {
        dispatch({ type: GET_ALL_USER_SUCCESS, payload:dulieu.data });
      }
    } catch (error) {
      dispatch({ type: GET_ALL_USER_FAILURE, payload: "Da that bai" });
    }
  };
};
export const addUser = (Elements,chatpost) => {
  return async (dispatch) => {
    try {
      const newElements={...Elements}
        if(chatpost!=''){
          newElements.ChatPost.push(chatpost)
        axios.patch(`http://localhost:3000/users/${Elements.id}`,newElements).then(
        );
        } 
        else{
          alert("Khong nhap rong")
        } 
        dispatch({ type: ADD_USER,payload:Elements});
        dispatch(getAllUser())   
    } catch (error) { 
        alert("Lỗi: "+error.message)
    }
    };
}
export const selectUser= (item) => {
  return async (dispatch) => {
            dispatch({ type: GET_SELECT_USER,payload:item})
    };
}

