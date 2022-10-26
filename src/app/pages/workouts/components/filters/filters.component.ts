import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { enumToDropdownOptions } from 'src/app/@shared/helpers';
import { Difficulty } from 'src/app/pages/constans';

@UntilDestroy()
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  // @Input() items$!: Observable<WorkoutInterface[]>;

  difficulty = enumToDropdownOptions(Difficulty);
  options = [
    { icon: 'pi pi-sort-alpha-down', value: 'sort-alpha-down' },
    { icon: 'pi pi-sort-alpha-up', value: 'sort-alpha-up' },
  ];
  form = new FormGroup({
    search: new FormControl('', {}),
    difficulty: new FormControl(null, {}),
    checkbox: new FormControl(false, {}),
    sort: new FormControl('sort-alpha-down', {}),
  });

  constructor() {
    this.form.controls.search.valueChanges.pipe(untilDestroyed(this));
  }
}
