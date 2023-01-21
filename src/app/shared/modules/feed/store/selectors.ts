import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IFeedState } from '../types/feed-state.interface';

export const feedFeatureSelector = (state: IAppState) => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.data?.articles
);

export const feedCount = createSelector(
  feedFeatureSelector,
  (state: IFeedState) => state.data?.articlesCount
);
