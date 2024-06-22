import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { MenuBarItem } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MenubarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuBarItem[] = [
    {
      icon: 'pi pi-building-columns',
      url: '',
      route: '/',
      label: 'Home',
    },
    {
      icon: 'pi pi-sparkles',
      url: '',
      route: 'projects',
      label: 'Projects',
    },
    {
      icon: 'pi pi-caret-right',
      url: '',
      route: 'activities',
      label: 'Activities',
    },
    {
      icon: 'pi pi-phone',
      url: '',
      route: 'contact',
      label: 'Contact',
    },
  ];
}
