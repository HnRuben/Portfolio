import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {
  private data = inject(DataService);

  readonly techCompetences = this.data.getCompetencesByType('tech');
  readonly humanCompetences = this.data.getCompetencesByType('human');
  readonly realisations = this.data.realisations;

  activeFilter = signal<'all' | 'tech' | 'human'>('all');

  get filteredTech() {
    return this.activeFilter() === 'human' ? [] : this.techCompetences;
  }

  get filteredHuman() {
    return this.activeFilter() === 'tech' ? [] : this.humanCompetences;
  }

  setFilter(f: 'all' | 'tech' | 'human') {
    this.activeFilter.set(f);
  }

  getRealisationsForCompetence(id: string): number {
    return this.data.getRealisationsByCompetence(id).length;
  }
}
