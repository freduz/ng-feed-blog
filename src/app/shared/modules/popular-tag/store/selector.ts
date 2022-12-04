import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IPopularTagState } from '../types/popular-tags-state.interface';

export const tagsFeatureSelector = (state: IAppState) => state.tags;

export const tagsSelector = createSelector(
  tagsFeatureSelector,
  (state: IPopularTagState) => state.tags
);

export const isLoadingSelector = createSelector(
  tagsFeatureSelector,
  (state: IPopularTagState) => state.isLoading
);
