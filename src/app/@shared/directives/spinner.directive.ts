import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSpinner]',
})
export class SpinnerDirective {
  //element = this.renderer.createElement('div');
  spinner = this.renderer.createElement('i');

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    //this.renderer.appendChild(this.element, this.pSpinner);
    //this.spinner.classList.add('pi', 'pi-spin', 'pi-spinner');
    this.renderer.addClass(this.spinner, 'pi');
    this.renderer.addClass(this.spinner, 'pi-spin');
    this.renderer.addClass(this.spinner, 'pi-spinner');
  }

  @Input('appSpinner') set isLoading(loading: boolean | null) {
    if (loading) {
      this.renderer.appendChild(this.elementRef.nativeElement, this.spinner);
    } else {
      if (!this.elementRef) return;
      this.renderer.removeChild(this.elementRef.nativeElement, this.spinner);
    }
  }
}
