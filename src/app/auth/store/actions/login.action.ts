import { createAction, props } from '@ngrx/store';
import { IBackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { ILoginRequest } from '../../types/loginRequest.interface';
import { ActionTypes } from '../actionTypes';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ error: IBackendErrorInterface }>()
);
