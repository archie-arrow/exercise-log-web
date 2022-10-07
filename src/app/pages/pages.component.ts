import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  menuIsOpen = true;

  toggleMenu(value: boolean): void {
    this.menuIsOpen = value;
  }
}
