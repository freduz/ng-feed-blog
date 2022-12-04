import { Action, createReducer, on } from '@ngrx/store';
import { IPopularTagState } from '../types/popular-tags-state.interface';
import {
  getPopularTagsActionSuccess,
  getPopularTagsActionFailure,
  getPopularTagsAction,
} from './actions/popular-tag.action';

export const initialState: IPopularTagState = {
  tags: null,
  error: null,
  isLoading: false,
};

export const tagsFeatureKey = 'tags';

export const tagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): IPopularTagState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsActionSuccess,
    (state, { tags }): IPopularTagState => ({
      ...state,
      tags,
      isLoading: false,
    })
  ),
  on(
    getPopularTagsActionFailure,
    (state): IPopularTagState => ({
      ...state,
    })
  )
);

export function reducers(state: IPopularTagState, action: Action) {
  return tagsReducer(state, action);
}
