import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, finalize, map, of, switchMap, tap } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/current-user.actions';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      tap(() => this.spinnerService.show()),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken');
        if (!token) {
          this.spinnerService.hide();
          return of(getCurrentUserFailureAction());
        }
        return this.authservice.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          }),
          finalize(() => this.spinnerService.hide())
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private persistenceService: PersistanceService,
    private authservice: AuthService,
    private spinnerService: NgxSpinnerService
  ) {}
}
