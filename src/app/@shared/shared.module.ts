import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ErrorMessageComponent } from 'src/app/@shared/components/error-massage/error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    ButtonModule,
    ErrorMessageComponent,
    RippleModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
