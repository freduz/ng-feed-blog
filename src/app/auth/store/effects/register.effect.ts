import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(registerFailureAction({ error: err.error.errors }));
          })
        );
      })
    )
  );

  redirectAfterRegister$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(registerSuccessAction),
        tap(() => this.router.navigateByUrl(''))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private persistenceService: PersistanceService,
    private router: Router
  ) {}
}
