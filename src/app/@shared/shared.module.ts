import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ErrorMessageComponent } from 'src/app/@shared/components/error-massage/error-message.component';
import { SpinnerDirective } from './directives/spinner.directive';

@NgModule({
  declarations: [ErrorMessageComponent, SpinnerDirective],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    ButtonModule,
    ErrorMessageComponent,
    RippleModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerDirective,
  ],
})
export class SharedModule {}
