import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserApiService } from 'src/app/@core/api/user.api.service';
import { UserInterface } from 'src/app/@core/interfaces/user.interface';
import {
  GetCurrentUserError,
  GetCurrentUserSuccess,
  UserActions,
  UserActionsTypes,
} from 'src/app/store/user/user.actions';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  /*
   * Get Current User
   */
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionsTypes.GetCurrentUser),
      switchMap(() =>
        this.userApiService.getCurrentUser().pipe(
          map((userData: UserInterface) => GetCurrentUserSuccess({ ...userData })),
          catchError(() => of(GetCurrentUserError())),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions<UserActions>, private userApiService: UserApiService) {}
}
