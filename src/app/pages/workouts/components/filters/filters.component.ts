import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { startWith } from 'rxjs';
import { Sorting } from 'src/app/@core/enums/sorting.enum';
import { enumToDropdownOptions } from 'src/app/@shared/helpers';
import { Difficulty } from 'src/app/pages/constans';

export interface FormInterface {
  search: FormControl<string>;
  difficulty: FormControl<Difficulty | null>;
  checkbox: FormControl<boolean>;
  sort: FormControl<Sorting>;
}

export interface FilterInterface {
  search: string;
  difficulty: Difficulty | null;
  checkbox: boolean;
  sort: Sorting;
}

@UntilDestroy()
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  @Output() filter = new EventEmitter<FilterInterface | Partial<FilterInterface>>();

  difficulty = enumToDropdownOptions(Difficulty);

  options = [
    { icon: 'pi pi-sort-alpha-down', value: Sorting.DESC },
    { icon: 'pi pi-sort-alpha-up', value: Sorting.ASC },
  ];

  startValue: FilterInterface = {
    checkbox: false,
    difficulty: null,
    search: '',
    sort: Sorting.DESC,
  };

  form = new FormGroup<FormInterface>({
    search: new FormControl(this.startValue.search, { nonNullable: true }),
    difficulty: new FormControl(this.startValue.difficulty),
    checkbox: new FormControl(this.startValue.checkbox, { nonNullable: true }),
    sort: new FormControl(this.startValue.sort, { nonNullable: true }),
  });

  constructor() {
    this.form.valueChanges
      .pipe(startWith(this.startValue), untilDestroyed(this))
      .subscribe((values) => this.filter.emit(values));
  }
}
