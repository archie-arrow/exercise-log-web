import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { AppState } from 'src/app/store/app.reducer';
import { DeleteWorkout } from 'src/app/store/workouts/workouts.actions';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutCardComponent {
  @Input() workout!: WorkoutInterface;

  constructor(private confirmationService: ConfirmationService, private store: Store<AppState>) {}

  deleteWorkout(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      header: 'Confirmation',
      icon: 'pi pi-trash',
      accept: () => this.store.dispatch(DeleteWorkout({ id: this.workout.id })),
    });
  }
}
