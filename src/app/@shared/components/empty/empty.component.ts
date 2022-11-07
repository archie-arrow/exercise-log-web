import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonName!: string;
  @Output() buttonClick = new EventEmitter();
}
