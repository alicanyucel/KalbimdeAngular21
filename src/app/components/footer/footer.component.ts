import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLinkComponent } from '../footer-link/footer-link.component';
import { SocialLinkComponent } from '../social-link/social-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterLinkComponent, SocialLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' }
  ];

  socialLinks = [
    { icon: 'fab fa-facebook', link: '#', label: 'Facebook' },
    { icon: 'fab fa-twitter', link: '#', label: 'Twitter' },
    { icon: 'fab fa-instagram', link: '#', label: 'Instagram' },
    { icon: 'fab fa-github', link: '#', label: 'GitHub' }
  ];
}
