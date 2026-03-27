import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {
  links = [
    { label: 'Home', icon: 'fas fa-home', path: '#home' },
    { label: 'Blog', icon: 'fas fa-blog', path: '#blog' },
    { label: 'About', icon: 'fas fa-info-circle', path: '#about' },
    { label: 'Contact', icon: 'fas fa-envelope', path: '#contact' }
  ];
}
