import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Method to open the side menu
  openSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBtn = document.getElementById('closeBtn');
    if (sideMenu && burgerMenu && closeBtn) {
      sideMenu.style.width = '250px';
      burgerMenu.style.fontSize = '0px';
      closeBtn.style.display = 'inline';
    }
  }

  // Method to close the side menu
  closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBtn = document.getElementById('closeBtn');
    if (sideMenu && burgerMenu && closeBtn) {
      sideMenu.style.width = '0';
      burgerMenu.style.fontSize = '30px';
      closeBtn.style.display = 'none';
    }
  }
}
