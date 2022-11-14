import { createSelector } from '@ngrx/store';

import { IAppState } from 'src/app/shared/types/appState.interface';
import { IAuthState } from '../types/authState.interface';

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state?.isLoggedIn
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.currentUser
);
