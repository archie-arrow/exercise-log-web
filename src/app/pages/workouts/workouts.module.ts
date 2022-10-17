import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AddExerciseComponent } from 'src/app/pages/workouts/components/add-exercise/add-exercise.component';
import { ExerciseComponent } from 'src/app/pages/workouts/components/exercise/exercise.component';
import { WorkoutsRoutingModule } from 'src/app/pages/workouts/workouts-routing.module';
import { WorkoutsComponent } from 'src/app/pages/workouts/workouts.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@NgModule({
  declarations: [ExerciseComponent, AddExerciseComponent, WorkoutsComponent, WorkoutListComponent],
  imports: [CommonModule, SharedModule, WorkoutsRoutingModule],
})
export class WorkoutsModule {}
