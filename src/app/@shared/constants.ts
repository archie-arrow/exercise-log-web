import {
  Language,
  LanguageOptionInterface,
} from 'src/app/@shared/interfaces/language-option.interface';
import { MenuItemInterface } from 'src/app/@shared/interfaces/menuItem.interface';

export const LANGUAGE_OPTIONS: LanguageOptionInterface[] = [
  { code: Language.ENG, name: 'ENG' },
  { code: Language.UKR, name: 'UKR' },
];

export const menuItems: MenuItemInterface[] = [
  {
    redirect: '/dashboard',
    iconSrc: 'assets/images/pages/dashboard-icon.svg',
    name: 'Dashboard',
  },
  {
    redirect: '/statistics',
    iconSrc: 'assets/images/pages/statistic-icon.svg',
    name: 'Statistics',
  },
  {
    redirect: '/programs',
    iconSrc: 'assets/images/pages/programs-icon.svg',
    name: 'Programs',
  },
  {
    redirect: '/settings',
    iconSrc: 'assets/images/pages/setting-icon.svg',
    name: 'Settings',
  },
  {
    redirect: '/body-size',
    iconSrc: 'assets/images/pages/body-icon.svg',
    name: 'Body Size',
  },
];
