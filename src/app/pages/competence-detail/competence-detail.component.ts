import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-competence-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './competence-detail.component.html',
  styleUrl: './competence-detail.component.scss'
})
export class CompetenceDetailComponent {
  private data = inject(DataService);
  private route = inject(ActivatedRoute);

  private id = toSignal(this.route.params.pipe(map(p => p['id'] as string)));

  readonly competence = computed(() => this.data.getCompetenceById(this.id() ?? ''));
  readonly relatedRealisations = computed(() =>
    this.data.getRealisationsByCompetence(this.id() ?? '')
  );

  readonly allCompetences = this.data.competences;

  getLevelIndex(level: string): number {
    return ['Initié', 'Autonome', 'Confirmé', 'Expert'].indexOf(level);
  }
}
