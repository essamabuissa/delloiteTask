import {AnyAction} from 'redux';

export interface AuthReducer {
  user: string | null;
  isLoggedIn: boolean;
}

const initialState = {
  user: null,
  isLoggedIn: false,
};

export default (state = initialState, action: AnyAction): AuthReducer => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
