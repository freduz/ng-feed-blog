import { createAction, props } from '@ngrx/store';
import { IFeedResponse } from '../../types/feed-response.interface';
import { ActionType } from '../action-type';

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{ feeds: IFeedResponse }>()
);

export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE);
