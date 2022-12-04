import { createAction, props } from '@ngrx/store';
import { IPopularTag } from 'src/app/shared/types/popular-tag.interface';
import { ActionTypes } from '../actionTypes';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsActionSuccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: IPopularTag[] }>()
);

export const getPopularTagsActionFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
