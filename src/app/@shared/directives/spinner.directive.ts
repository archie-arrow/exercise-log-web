import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSpinner]',
})
export class SpinnerDirective {
  spinner = this.renderer.createElement('i');

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.renderer.addClass(this.spinner, 'pi');
    this.renderer.addClass(this.spinner, 'pi-spin');
    this.renderer.addClass(this.spinner, 'pi-spinner');
    this.renderer.addClass(this.spinner, 'hidden');
    this.renderer.appendChild(this.elementRef.nativeElement, this.spinner);
  }

  @Input('appSpinner') set isLoading(loading: boolean | null) {
    this.toggleSpinnerHidden(!!loading);
  }

  private toggleSpinnerHidden(loading: boolean): void {
    if (loading) {
      this.renderer.removeClass(this.spinner, 'hidden');
    } else {
      this.renderer.addClass(this.spinner, 'hidden');
    }
  }
}
