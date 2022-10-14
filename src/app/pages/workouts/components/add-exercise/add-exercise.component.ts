import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { enumToDropdownOptions } from 'src/app/@shared/helpers';
import { Difficulty, Region, WeightType } from 'src/app/pages/constans';

export interface AddExerciseInterface {
  name: FormControl<string>;
  description: FormControl<string>;
  difficulty: FormControl<Difficulty>;
  weightType: FormControl<WeightType>;
  primaryRegion: FormControl<Region>;
  secondaryRegion: FormControl<Region>;
}

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent {
  difficulty = enumToDropdownOptions(Difficulty);
  weightType = enumToDropdownOptions(WeightType);
  region = enumToDropdownOptions(Region);

  form = new FormGroup<AddExerciseInterface>({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    description: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    difficulty: new FormControl(Difficulty.Easy, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    weightType: new FormControl(WeightType.BodyWeight, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    primaryRegion: new FormControl(Region.Abdomen, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    secondaryRegion: new FormControl(Region.Abdomen, {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.getRawValue());
    });
  }
}
