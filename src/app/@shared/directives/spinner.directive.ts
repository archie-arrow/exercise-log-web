import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSpinner]',
})
export class SpinnerDirective {
  overlay = this.renderer.createElement('div');
  spinner = this.renderer.createElement('div');

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.renderer.addClass(this.spinner, 'loader');
    this.renderer.addClass(this.overlay, 'loader-overlay');
    this.renderer.appendChild(this.overlay, this.spinner);
  }

  @Input('appSpinner') set isLoading(loading: boolean | null) {
    this.renderer.appendChild(this.elementRef.nativeElement, this.overlay);

    if (!loading) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.overlay);
    }
  }
}
