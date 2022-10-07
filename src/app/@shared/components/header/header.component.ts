import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { menuItems } from 'src/app/@shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = '';

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.getTitle(event.url);
      }
    });
  }

  ngOnInit() {
    this.getTitle(this.router.url);
  }

  getTitle(string: string): void {
    menuItems.forEach((element) => {
      if (string === element.redirect) {
        this.title = element.name;
      }
    });
  }
}
