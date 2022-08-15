import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
//import { MenuItem } from 'primeng/api'; //api

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
