import {AppDispatch} from '../..';

export const RegisterAction = (userData: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: 'SET_USER',
    payload: userData,
  });
};

export const LogoutAction = () => (dispatch: AppDispatch) => {
  dispatch({
    type: 'LOG_OUT',
  });
};
