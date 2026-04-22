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
  private readonly data = inject(DataService);

  readonly allRealisations = this.data.realisations;
  activeFilter = signal<string>('all');

  readonly filters = [
    { id: 'all',       label: 'Toutes' },
    { id: 'entreprise',label: '🏢 Entreprise' },
    { id: 'esiea',     label: '🎓 ESIEA' },
    { id: 'evenement', label: '🎉 Événement' },
  ];

  get filteredRealisations(): Realisation[] {
    if (this.activeFilter() === 'all') return this.allRealisations;
    return this.allRealisations.filter(r => r.type === this.activeFilter());
  }

  getHumanCompetenceTitles(r: Realisation): string[] {
    if (r.techStack.length > 0) return [];
    return r.competences
      .map(id => this.data.getCompetenceById(id))
      .filter(c => c?.type === 'human')
      .map(c => c!.title);
  }
}
