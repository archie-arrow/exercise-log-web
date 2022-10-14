import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddExerciseComponent } from 'src/app/pages/workouts/components/add-exercise/add-exercise.component';
import { ExerciseComponent } from 'src/app/pages/workouts/components/exercise/exercise.component';
import { WorkoutsComponent } from 'src/app/pages/workouts/workouts.component';

@NgModule({
  declarations: [ExerciseComponent, AddExerciseComponent, WorkoutsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
  ],
})
export class WorkoutsModule {}
