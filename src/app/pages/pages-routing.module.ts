import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodySizeComponent } from 'src/app/pages/body-size/body-size.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { ProgramsComponent } from 'src/app/pages/programs/programs.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { StatisticsComponent } from 'src/app/pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'programs',
        component: ProgramsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'body-size',
        component: BodySizeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
