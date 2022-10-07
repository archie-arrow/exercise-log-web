import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { menuItems } from 'src/app/@shared/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() menuIsOpen!: boolean;
  menuItems = menuItems;

  constructor(public domSanitizer: DomSanitizer) {}

  test(li: HTMLLIElement) {
    console.log(li);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
