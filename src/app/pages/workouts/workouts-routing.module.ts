import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from 'src/app/pages/workouts/components/workout-list/workout-list.component';
import { WorkoutPageComponent } from 'src/app/pages/workouts/components/workout-page/workout-page.component';
import { WorkoutsComponent } from 'src/app/pages/workouts/workouts.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    children: [
      {
        path: '',
        component: WorkoutListComponent,
      },
      {
        path: ':id',
        component: WorkoutPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
