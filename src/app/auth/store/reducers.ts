import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/authState.interface';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/current-user.actions';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

export const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false,
};

export const authFeatureKey = 'auth';

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, { currentUser }): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, { error }): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: error,
    })
  ),
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, { currentUser }): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, { error }): IAuthState => ({
      ...state,
      validationErrors: error,
      isSubmitting: false,
    })
  ),
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, { currentUser }): IAuthState => ({
      ...state,
      currentUser,
      isLoading: false,
      isLoggedIn: true,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
