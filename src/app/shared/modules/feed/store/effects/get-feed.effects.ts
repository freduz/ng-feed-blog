import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { FeedService } from '../../services/feed.service';
import { IFeedResponse } from '../../types/feed-response.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/get-feed.action';

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap((action) => {
        return this.feedService.getFeed(action.url).pipe(
          map((feedData: IFeedResponse) => {
            return getFeedSuccessAction({ feeds: feedData });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
