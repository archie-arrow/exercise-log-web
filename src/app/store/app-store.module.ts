import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from 'src/app/store/app.reducer';
import { AuthEffects } from 'src/app/store/auth/auth.effects';
import { addTokenToLocalStorage } from 'src/app/store/auth/auth.meta-reducer';
import { SettingsEffects } from 'src/app/store/settings/settings.effects';
import { SettingsMetaReducer } from 'src/app/store/settings/settings.meta-reducer';
import { UserEffects } from 'src/app/store/user/user.effects';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer[] = [SettingsMetaReducer(), addTokenToLocalStorage];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects, SettingsEffects, UserEffects]),
  ],
})
export class AppStoreModule {}
