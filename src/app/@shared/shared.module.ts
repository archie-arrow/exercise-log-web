import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FieldErrorMessageComponent } from 'src/app/@shared/components/field-error-massage/field-error-message.component';
import { SpinnerDirective } from './directives/spinner.directive';

@NgModule({
  declarations: [FieldErrorMessageComponent, SpinnerDirective],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    CarouselModule,
    ButtonModule,
    FieldErrorMessageComponent,
    RippleModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerDirective,
    DropdownModule,
    FormsModule,
  ],
})
export class SharedModule {}
