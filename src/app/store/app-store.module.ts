import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from 'src/app/store/app.reducer';
import { AuthEffects } from 'src/app/store/auth/auth.effects';
import { addTokenToLocalStorage } from 'src/app/store/auth/auth.meta-reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer[] = [addTokenToLocalStorage];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects]),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AppStoreModule {}
