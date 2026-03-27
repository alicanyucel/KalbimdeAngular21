import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.css'
})
export class FooterLinkComponent {
  @Input() label: string = '';
  @Input() href: string = '#';
  @Input() withIcon: boolean = false;
  @Input() icon: string = 'fas fa-arrow-right';
}
