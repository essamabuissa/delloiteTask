import {AnyAction} from 'redux';

export interface ConfigsReducer {
  language: string;
}

const initialState = {
  language: '',
};

export default (state = initialState, action: AnyAction): ConfigsReducer => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
