import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { PagesComponent } from 'src/app/pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BodySizeComponent } from './body-size/body-size.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    SettingsComponent,
    StatisticsComponent,
    BodySizeComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
