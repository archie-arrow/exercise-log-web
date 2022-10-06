import { Component } from '@angular/core';
import { menuItems } from 'src/app/@shared/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  menuItems = menuItems;
}
