import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-error-message',
  template: ` <div class="error-card">
    <div class="error-title">Oh, something went wrong...</div>
    <div class="error-message">note: {{ message || 'Please, try again later' }}</div>
  </div>`,
  styles: [
    `
      @import '../../../@themes/styles/variable';

      .error-card {
        border: solid 0.125rem $primary-300;
        border-radius: 0.6rem;
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .error-title {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorCardComponent {
  @Input() message!: string | null;

  constructor() {}
}
