/* eslint-disable prettier/prettier */
import user_types from "./types";

const init_state = {
  id: 0,
  email: '',
  username: '',
  admin: false
};

function userReducer(state = init_state, action) {
  if (action.type === user_types.USER_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      email: action.payload.email,
      username: action.payload.username
    };
  } else if (action.type === user_types.USER_LOGOUT) {
    return init_state;
  } else if (action.type === user_types.ADMIN_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      email: action.payload.email,
      username: action.payload.username,
      admin: action.payload.username
    };
  } else if (action.type === user_types.ADMIN_LOGOUT) {
    return init_state;
  }
  return state;
}

export default userReducer;
