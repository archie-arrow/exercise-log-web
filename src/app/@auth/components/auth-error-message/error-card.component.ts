import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-error-message',
  template: ` <div class="error-card">
    <div class="error-title">Oh, something went wrong!</div>
    <div class="error-message">{{ message }}</div>
  </div>`,
  styleUrls: ['./error-card.component.scss'],
})
export class ErrorCardComponent {
  @Input() message: string | null = '';

  constructor() {}
}
