import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { IBackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action';
import { registerSuccessAction } from '../actions/register.action';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap((action) => {
        return this.authService.login(action.request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(loginFailureAction({ error: error.error.errors }));
          })
        );
      })
    )
  );

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistanceService,
    private router: Router
  ) {}
}
