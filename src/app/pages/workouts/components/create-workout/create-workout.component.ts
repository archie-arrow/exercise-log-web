import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetExercises } from 'src/app/store/exercise/exercise.actions';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss'],
})
export class CreateWorkoutComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(GetExercises());
  }
}
