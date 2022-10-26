import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { FilterInterface } from 'src/app/pages/workouts/components/filters/filters.component';

export const sortByName = (workouts: WorkoutInterface[]) => {
  return workouts.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
};

export const applyFiltersAndSorting = (
  workouts: WorkoutInterface[],
  options: FilterInterface | Partial<FilterInterface>,
): WorkoutInterface[] => {
  workouts = workouts.filter((item) =>
    item.name.toLowerCase().startsWith(options.search?.toLowerCase().trim() || ''),
  );

  workouts = options.checkbox ? workouts.filter((item) => item.withAdditionalEquipment) : workouts;

  workouts = options.difficulty
    ? workouts.filter((item) => item.difficulty === options.difficulty)
    : workouts;

  return options.sort ? sortByName(workouts) : sortByName(workouts).reverse();
};
