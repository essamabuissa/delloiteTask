import {AppDispatch} from '../..';

export const SetLanguageAction =
  (language: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: 'SET_LANGUAGE',
      payload: language,
    });
  };
