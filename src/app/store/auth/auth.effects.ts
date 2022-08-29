import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthInterface } from 'src/app/@auth/interfaces/auth.interface';
import { LoginInterface } from 'src/app/@auth/interfaces/login.interface';
import { RegisterInterface } from 'src/app/@auth/interfaces/register.interface';
import { AuthApiService } from 'src/app/@auth/services/auth.api.service';
import {
  AuthActions,
  AuthActionsTypes,
  LoginError,
  LoginSuccess,
  RegisterError,
  RegisterSuccess,
  ForgotPasswordError,
  ForgotPasswordSuccess,
} from 'src/app/store/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  /*
   * Forgot Password
   */
  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsTypes.ForgotPassword),
      switchMap((action: { email: string }) =>
        this.authApiService.forgotPassword(action.email).pipe(
          map(() => ForgotPasswordSuccess()),
          catchError(() => of(ForgotPasswordError())),
        ),
      ),
    ),
  );

  /*
   * Register
   */
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsTypes.Register),
      switchMap((action: { register: RegisterInterface }) =>
        this.authApiService.register(action.register).pipe(
          map((data: AuthInterface) => {
            localStorage.setItem('token', data.token);
            return RegisterSuccess();
          }),
          catchError(({ error }) => of(RegisterError({ errorMessage: error.message }))),
        ),
      ),
    ),
  );

  /*
   * Login
   */
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsTypes.Login),
      switchMap((action: { login: LoginInterface }) =>
        this.authApiService.login(action.login).pipe(
          map((data: AuthInterface) => {
            localStorage.setItem('token', data.token);
            return LoginSuccess();
          }),
          catchError(({ error }) => of(LoginError({ errorMessage: error.message }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions<AuthActions>, private authApiService: AuthApiService) {}
}
