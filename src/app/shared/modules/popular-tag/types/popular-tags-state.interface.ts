import { IPopularTag } from 'src/app/shared/types/popular-tag.interface';

export interface IPopularTagState {
  tags: IPopularTag[] | null;
  error: string | null;
  isLoading: boolean;
}
