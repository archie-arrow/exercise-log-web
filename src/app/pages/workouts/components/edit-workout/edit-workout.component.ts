import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetExercises } from 'src/app/store/exercise/exercise.actions';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.scss'],
})
export class EditWorkoutComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(GetExercises());
  }
}
