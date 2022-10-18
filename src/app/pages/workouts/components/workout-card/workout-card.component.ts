import { Component, Input } from '@angular/core';
import { WorkoutInterface } from 'src/app/@core/interfaces/workout.interface';
import { Difficulty } from 'src/app/pages/constans';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss']
})
export class WorkoutCardComponent {
  @Input() workout!: WorkoutInterface;
  difficulty = Difficulty;

  constructor() { }
}
