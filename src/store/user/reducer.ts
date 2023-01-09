import { Actions, ActionType } from "./actionTypes";

type InitialState = {
  email: string;
  username: string;
  role: string;
  about: string;
  avatar: string;
  isEditMode: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  avatar: "",
  about: "",
  username: "",
  role: "",
  email: "",
  isEditMode: false,
  isLoading: false,
};

const UserReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_USER:
      state = {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
        username: action.payload.username,
        about: action.payload.about,
        avatar: action.payload.avatar,
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
