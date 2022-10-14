import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddExerciseComponent } from 'src/app/pages/workouts/components/add-exercise/add-exercise.component';
import { ExerciseComponent } from 'src/app/pages/workouts/components/exercise/exercise.component';
import { WorkoutsRoutingModule } from 'src/app/pages/workouts/workouts-routing.module';
import { WorkoutsComponent } from 'src/app/pages/workouts/workouts.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@NgModule({
  declarations: [ExerciseComponent, AddExerciseComponent, WorkoutsComponent, WorkoutListComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkoutsRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class WorkoutsModule {}
