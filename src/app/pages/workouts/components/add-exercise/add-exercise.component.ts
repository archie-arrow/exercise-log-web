import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { enumToDropdownOptions } from 'src/app/@shared/helpers';
import { Difficulty, Region, WeightType } from 'src/app/pages/constans';
import { AppState } from 'src/app/store/app.reducer';
import { CreateExercise } from 'src/app/store/exercise/exercise.actions';

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
      validators: [],
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
      validators: [],
      nonNullable: true,
    }),
  });

  constructor(private store: Store<AppState>) {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.getRawValue());
    });
  }

  addExercise() {
    if (this.form.valid) {
      this.store.dispatch(CreateExercise({ exercise: this.form.getRawValue() }));
    }
  }
}
