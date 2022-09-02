import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/@auth/auth-routing.module';
import { AuthComponent } from 'src/app/@auth/auth.component';
import { ForgotPasswordComponent } from 'src/app/@auth/components/forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorCardComponent } from './components/auth-error-message/error-card.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ErrorCardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
