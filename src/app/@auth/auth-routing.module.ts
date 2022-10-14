import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/app/@auth/auth.component';
import { ForgotPasswordComponent } from 'src/app/@auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/app/@auth/components/login/login.component';
import { RegisterComponent } from 'src/app/@auth/components/register/register.component';
import { ResetPasswordComponent } from 'src/app/@auth/components/reset-password/reset-password.component';
import { ResetPasswordGuard } from 'src/app/@core/guards/reset-password.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [ResetPasswordGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
