import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { Realisation } from '../../core/models';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './realisations.component.html',
  styleUrl: './realisations.component.scss'
})
export class RealisationsComponent {
  private data = inject(DataService);

  readonly allRealisations = this.data.realisations;
  activeFilter = signal<string>('all');

  readonly filters = [
    { id: 'all',       label: 'Toutes' },
    { id: 'entreprise',label: '🏢 Entreprise' },
    { id: 'personnel', label: '💻 Perso' },
    { id: 'evenement', label: '🎉 Événement' },
  ];

  get filteredRealisations(): Realisation[] {
    if (this.activeFilter() === 'all') return this.allRealisations;
    return this.allRealisations.filter(r => r.type === this.activeFilter());
  }
}
