import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthInterface } from 'src/app/@auth/interfaces/auth.interface';
import { LoginInterface } from 'src/app/@auth/interfaces/login.interface';
import { RegisterInterface } from 'src/app/@auth/interfaces/register.interface';
import { ResetPasswordInterface } from 'src/app/@auth/interfaces/reset-password.interface';
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
  ResetPasswordSuccess,
  ResetPasswordError,
} from 'src/app/store/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  /*
   * Forgot Password
   */
  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsTypes.ForgotPassword),
      switchMap(({ email }: { email: string }) =>
        this.authApiService.forgotPassword(email).pipe(
          map(() => ForgotPasswordSuccess()),
          catchError(() => of(ForgotPasswordError())),
        ),
      ),
    ),
  );

  /*
   * Reset Password
   */
  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionsTypes.ResetPassword),
      switchMap(({ data }: { data: ResetPasswordInterface }) =>
        this.authApiService.resetPassword(data).pipe(
          map(() => {
            this.router.navigate(['/login']);
            return ResetPasswordSuccess();
          }),
          catchError(({ error }) => of(ResetPasswordError({ errorMessage: error.message }))),
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
      switchMap(({ register }: { register: RegisterInterface }) =>
        this.authApiService.register(register).pipe(
          map((data: AuthInterface) => RegisterSuccess({ token: data.token })),
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
      switchMap(({ login }: { login: LoginInterface }) =>
        this.authApiService.login(login).pipe(
          map((data: AuthInterface) => LoginSuccess({ token: data.token })),
          catchError(({ error }) => of(LoginError({ errorMessage: error.message }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions<AuthActions>,
    private authApiService: AuthApiService,
    private router: Router,
  ) {}
}
