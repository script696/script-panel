import { BASE_URL } from "../../api/constants/api_endpoints";
import defaultAvatar from "../../assets/img/avatars/defaultAvatar.jpg";

import { Actions, ActionType } from "./actionTypes";

type InitialState = {
  email: string;
  username: string;
  role: string;
  about: string;
  avatar: string;
  isEditMode: boolean;
};

const initialState: InitialState = {
  about: "",
  avatar: "",
  email: "",
  isEditMode: false,
  role: "",
  username: "",
};

const UserReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_USER:
      const avatar = action.payload.avatar;
      state = {
        ...state,
        about: action.payload.about,
        avatar: avatar ? `${BASE_URL}/${avatar}` : defaultAvatar,
        email: action.payload.email,
        role: action.payload.role,
        username: action.payload.username,
      };
      break;
    case ActionType.TOGGLE_PROFILE_EDIT_MODE:
      state = {
        ...state,
        isEditMode: !state.isEditMode,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UserReducer;
