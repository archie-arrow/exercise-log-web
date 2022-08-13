import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/@auth/auth-routing.module';
import { AuthComponent } from 'src/app/@auth/auth.component';
import { LoginComponent } from './components /login/login.component';
import { RegisterComponent } from './components /register/register.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
