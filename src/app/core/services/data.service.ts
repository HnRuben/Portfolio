import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Competence, Realisation, Experience } from '../models';

interface PortfolioData {
  competences: Competence[];
  realisations: Realisation[];
  experiences: Experience[];
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  competences: Competence[] = [];
  realisations: Realisation[] = [];
  experiences: Experience[] = [];

  load(): Observable<void> {
    return this.http.get<PortfolioData>('data.json').pipe(
      tap(data => {
        this.competences = data.competences;
        this.realisations = data.realisations;
        this.experiences = data.experiences;
      }),
      map(() => void 0)
    );
  }

  getCompetenceById(id: string): Competence | undefined {
    return this.competences.find(c => c.id === id);
  }

  getRealisationById(id: string): Realisation | undefined {
    return this.realisations.find(r => r.id === id);
  }

  getCompetencesByType(type: 'tech' | 'human'): Competence[] {
    return this.competences.filter(c => c.type === type);
  }

  getRealisationsByCompetence(competenceId: string): Realisation[] {
    return this.realisations.filter(r => r.competences.includes(competenceId));
  }

  getCompetencesByRealisation(realisationId: string): Competence[] {
    const realisation = this.getRealisationById(realisationId);
    if (!realisation) return [];
    return this.competences.filter(c => realisation.competences.includes(c.id));
  }
}
