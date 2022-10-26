import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { FilterInterface } from 'src/app/pages/workouts/components/filters/filters.component';
import { applyFiltersAndSorting } from 'src/app/pages/workouts/helpers';
import { AppState } from 'src/app/store/app.reducer';
import { GetWorkouts } from 'src/app/store/workouts/workouts.actions';
import { selectWorkoutPending, selectWorkouts } from 'src/app/store/workouts/workouts.selector';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  workouts$ = this.store.select(selectWorkouts);
  isLoading$ = this.store.select(selectWorkoutPending);
  filteredWorkouts$ = this.workouts$;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(GetWorkouts());
  }

  createWorkout() {
    console.log('create workout');
  }

  sort(filters: FilterInterface | Partial<FilterInterface>) {
    this.filteredWorkouts$ = this.workouts$.pipe(
      map((items) => applyFiltersAndSorting(items, filters)),
      take(1),
    );
  }
}
