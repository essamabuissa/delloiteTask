import {AnyAction} from 'redux';
import {data} from '../../data';

export interface HomeReducer {
  data: {name: string; imageUrl: string}[];
}

const initialState = {
  data,
};

export default (state = initialState, action: AnyAction): HomeReducer => {
  switch (action.type) {
    default:
      return state;
  }
};
