import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { icon: 'fas fa-home', label: 'Home', link: '#' },
    { icon: 'fas fa-user', label: 'Profile', link: '#' },
    { icon: 'fas fa-cog', label: 'Settings', link: '#' },
    { icon: 'fas fa-envelope', label: 'Messages', link: '#' },
    { icon: 'fas fa-heart', label: 'Favorites', link: '#' },
    { icon: 'fas fa-sign-out-alt', label: 'Logout', link: '#' }
  ];
}
