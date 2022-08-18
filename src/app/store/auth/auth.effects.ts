import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { RegisterInterface } from 'src/app/@auth/interfaces /register.interface';
import { AuthApiService } from 'src/app/@auth/services /auth.api.service';
import {
  AuthActions,
  AuthActionsTypes,
  RegisterError,
  RegisterSuccess,
} from 'src/app/store/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  /*
   * Register
   */
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsTypes.Register),
      switchMap((action: { register: RegisterInterface }) =>
        this.authApiService.register(action.register).pipe(
          map(() => RegisterSuccess()),
          catchError(() => of(RegisterError())),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions<AuthActions>, private authApiService: AuthApiService) {}
}
