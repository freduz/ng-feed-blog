import { Action, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../types/feed-state.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/get-feed.action';

export const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedFeatureKey = 'feed';

export const featureReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, { feeds }): IFeedState => ({
      ...state,
      data: feeds,
      isLoading: false,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
    })
  )
);

export function reducers(state: IFeedState, action: Action) {
  return featureReducer(state, action);
}
