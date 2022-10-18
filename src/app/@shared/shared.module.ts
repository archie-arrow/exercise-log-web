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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { FieldErrorMessageComponent } from 'src/app/@shared/components/field-error-massage/field-error-message.component';
import { NavComponent } from 'src/app/@shared/components/nav/nav.component';
import { SpinnerDirective } from './directives/spinner.directive';
import { HeaderComponent } from './components/header/header.component';
import { EmptyComponent } from './components/empty/empty.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    FieldErrorMessageComponent,
    SpinnerDirective,
    NavComponent,
    HeaderComponent,
    EmptyComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    AvatarModule,
    SkeletonModule,
    ProgressSpinnerModule,
  ],
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
    InputTextareaModule,
    EmptyComponent,
    LoadingComponent,
    ProgressSpinnerModule,
  ],
})
export class SharedModule {}
