import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthInterface } from 'src/app/@core/interfaces/auth.interface';
import { LoginInterface } from 'src/app/@core/interfaces/login.interface';
import { RegisterInterface } from 'src/app/@core/interfaces/register.interface';
import { ResetPasswordInterface } from 'src/app/@core/interfaces/reset-password.interface';
import { AuthApiService } from 'src/app/@core/api/auth.api.service';
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

  /*
   * Auth Success Redirect
   */
  authSuccessRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionsTypes.LoginSuccess, AuthActionsTypes.RegisterSuccess),
        map(() => this.router.navigate(['/dashboard'])),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions<AuthActions>,
    private authApiService: AuthApiService,
    private router: Router,
  ) {}
}
