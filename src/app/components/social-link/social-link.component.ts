import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  icon: string;
  link: string;
  label: string;
}

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  @Input() icon: string = 'fab fa-github';
  @Input() href: string = '#';
  @Input() label: string = 'Follow';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
