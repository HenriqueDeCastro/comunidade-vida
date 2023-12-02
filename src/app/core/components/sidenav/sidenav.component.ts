import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavButtonMenuComponent } from './components/sidenav-button-menu/sidenav-button-menu.component';
import { SidenavRoutesDesktopComponent } from './components/sidenav-routes-desktop/sidenav-routes-desktop.component';

@Component({
  selector: 'comunidade-vida-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    SidenavButtonMenuComponent,
    SidenavRoutesDesktopComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  scrollAtTop: boolean;
  innerWidth: number;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() {
    this.scrollAtTop = true;
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition(): void {
    this.scrollAtTop = window.scrollY === 0;
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
    document.documentElement.style.overflow = this.sidenav.opened? 'hidden' : 'auto';
    this.scrollAtTop = this.sidenav.opened? false : window.scrollY === 0;
  }
}
