import { Component, Input } from '@angular/core';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss']
})
export class WorkoutCardComponent {
  @Input() workout!: WorkoutInterface;

  constructor() { }
}
