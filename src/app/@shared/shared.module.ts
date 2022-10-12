import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { FieldErrorMessageComponent } from 'src/app/@shared/components/field-error-massage/field-error-message.component';
import { NavComponent } from 'src/app/@shared/components/nav/nav.component';
import { SpinnerDirective } from './directives/spinner.directive';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FieldErrorMessageComponent, SpinnerDirective, NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, ButtonModule, AvatarModule, SkeletonModule],
  exports: [
    NavComponent,
    FieldErrorMessageComponent,
    SpinnerDirective,
    InputTextModule,
    CarouselModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    TranslateModule,
    HeaderComponent,
  ],
})
export class SharedModule {}
