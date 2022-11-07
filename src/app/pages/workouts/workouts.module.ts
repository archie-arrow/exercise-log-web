import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AddExerciseComponent } from 'src/app/pages/workouts/components/add-exercise/add-exercise.component';
import { ExerciseComponent } from 'src/app/pages/workouts/components/exercise/exercise.component';
import { WorkoutsRoutingModule } from 'src/app/pages/workouts/workouts-routing.module';
import { WorkoutsComponent } from 'src/app/pages/workouts/workouts.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { WorkoutPageComponent } from './components/workout-page/workout-page.component';
import { CreateWorkoutComponent } from 'src/app/pages/workouts/components/create-workout/create-workout.component';

@NgModule({
  declarations: [
    ExerciseComponent,
    AddExerciseComponent,
    WorkoutsComponent,
    WorkoutListComponent,
    WorkoutCardComponent,
    FiltersComponent,
    WorkoutPageComponent,
    CreateWorkoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WorkoutsRoutingModule,
    CheckboxModule,
    SelectButtonModule,
    TableModule,
  ],
})
export class WorkoutsModule {}
