import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from 'src/app/pages/workouts/components/workout-list/workout-list.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
