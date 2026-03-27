import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavLinkComponent, IconLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  appTitle = 'Kalbimde';
  isMenuOpen = false;

  navItems = [
    { label: 'Home', href: '#home', isActive: true },
    { label: 'Blog', href: '#blog', isActive: false },
    { label: 'About', href: '#about', isActive: false },
    { label: 'Contact', href: '#contact', isActive: false }
  ];

  headerButtons = [
    { icon: 'fas fa-search', title: 'Search', variant: 'primary' as const },
    { icon: 'fas fa-moon', title: 'Toggle Theme', variant: 'primary' as const },
    { icon: 'fas fa-user-circle', title: 'User Menu', variant: 'primary' as const }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
