import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetWorkouts } from 'src/app/store/workouts/workouts.actions';
import { selectWorkouts } from 'src/app/store/workouts/workouts.selector';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  workouts = this.store.select(selectWorkouts);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(GetWorkouts());
  }

  createWorkout() {
    console.log('create workout');
  }
}
