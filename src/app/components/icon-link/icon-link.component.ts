import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-link.component.html',
  styleUrl: './icon-link.component.css'
})
export class IconLinkComponent {
  @Input() icon: string = 'fas fa-link';
  @Input() href: string = '#';
  @Input() title: string = '';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
}
