import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { map, startWith, switchMap } from 'rxjs';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { enumToDropdownOptions } from 'src/app/@shared/helpers';
import { Difficulty } from 'src/app/pages/constans';
import { AppState } from 'src/app/store/app.reducer';
import { GetWorkouts } from 'src/app/store/workouts/workouts.actions';
import { selectWorkoutPending, selectWorkouts } from 'src/app/store/workouts/workouts.selector';

export interface formInterface {
  search: FormControl<string>;
  difficulty: FormControl<Difficulty | null>;
  checkbox: FormControl<boolean>;
  sort: FormControl<Sorting>;
}

export enum Sorting {
  DESC,
  ASC,
}

@UntilDestroy()
@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  difficulty = enumToDropdownOptions(Difficulty);

  options = [
    { icon: 'pi pi-sort-alpha-down', value: Sorting.DESC },
    { icon: 'pi pi-sort-alpha-up', value: Sorting.ASC },
  ];

  form = new FormGroup<formInterface>({
    search: new FormControl('', { nonNullable: true }),
    difficulty: new FormControl(null, { nonNullable: true }),
    checkbox: new FormControl(false, { nonNullable: true }),
    sort: new FormControl(Sorting.DESC, { nonNullable: true }),
  });

  workouts$ = this.store.select(selectWorkouts);

  filteredWorkouts$ = this.form.valueChanges.pipe(
    startWith({
      checkbox: false,
      difficulty: null,
      search: '',
      sort: Sorting.DESC,
    }),
    switchMap((values) =>
      this.workouts$.pipe(map((items) => this.applyFiltersAndSorting(items, values))),
    ),
  );

  isLoading$ = this.store.select(selectWorkoutPending);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(GetWorkouts());
  }

  createWorkout() {
    console.log('create workout');
  }

  sortByName(workouts: WorkoutInterface[]) {
    return workouts.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
  }

  applyFiltersAndSorting(workouts: WorkoutInterface[], options: any): WorkoutInterface[] {
    workouts = workouts.filter((item) =>
      item.name.toLowerCase().startsWith(options.search?.toLowerCase().trim() || ''),
    );

    workouts = options.checkbox
      ? workouts.filter((item) => item.withAdditionalEquipment)
      : workouts;

    workouts = options.difficulty
      ? workouts.filter((item) => item.difficulty === options.difficulty)
      : workouts;

    return options.sort ? this.sortByName(workouts) : this.sortByName(workouts).reverse();
  }
}
