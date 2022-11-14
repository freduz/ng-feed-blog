import { IFeedResponse } from './feed-response.interface';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IFeedResponse | null;
}
