import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IPopularTag } from 'src/app/shared/types/popular-tag.interface';
import { PopularTagService } from '../../services/popular-tag.service';
import {
  getPopularTagsAction,
  getPopularTagsActionFailure,
  getPopularTagsActionSuccess,
} from '../actions/popular-tag.action';

@Injectable()
export class GetPopularTagsEffects {
  getTags$ = createEffect(() =>
    this.actions.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagService.getPopularTag().pipe(
          map((tags: IPopularTag[]) => {
            return getPopularTagsActionSuccess({ tags });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(getPopularTagsActionFailure);
          })
        );
      })
    )
  );

  constructor(
    private actions: Actions,
    private popularTagService: PopularTagService
  ) {}
}
