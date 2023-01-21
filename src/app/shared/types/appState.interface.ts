import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feed-state.interface';
import { IPopularTagState } from '../modules/popular-tag/types/popular-tags-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  tags: IPopularTagState;
}
