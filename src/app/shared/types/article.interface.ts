import { IProfile } from './profile.interface';

export interface IArticle {
  title: string;
  body: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  favorited: boolean;
  favoritesCount: number;
  author: IProfile;
}
