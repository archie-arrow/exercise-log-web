import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { AuthRoutingModule } from 'src/app/@auth/auth-routing.module';
import { AuthComponent } from 'src/app/@auth/auth.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, AuthFormComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule, RippleModule, ReactiveFormsModule],
})
export class AuthModule {}
