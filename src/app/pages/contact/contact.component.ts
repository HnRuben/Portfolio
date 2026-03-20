import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  copied = signal(false);

  readonly email = 'ruben.hayoun@example.com'; // À remplacer

  readonly contactLinks = [
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/ruben-hayoun',
      href: 'https://linkedin.com/in/ruben-hayoun',
      color: '#0A66C2',
      colorLight: '#EEF5FF',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/rubenhayoun',
      href: 'https://github.com/rubenhayoun',
      color: '#24292F',
      colorLight: '#F6F8FA',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: this.email,
      href: `mailto:${this.email}`,
      color: '#4F46E5',
      colorLight: '#EEF2FF',
    },
  ];

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
