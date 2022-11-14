import { createAction, props } from '@ngrx/store';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { ActionTypes } from '../actionTypes';

export const getCurrentUserAction = createAction(ActionTypes.CURRENT_USER);
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
export const getCurrentUserFailureAction = createAction(
  ActionTypes.CURRENT_USER_FAILURE
);
