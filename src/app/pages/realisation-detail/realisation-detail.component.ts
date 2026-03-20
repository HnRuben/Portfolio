import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-realisation-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective, SkillBadgeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './realisation-detail.component.html',
  styleUrl: './realisation-detail.component.scss'
})
export class RealisationDetailComponent {
  private data = inject(DataService);
  private route = inject(ActivatedRoute);

  private id = toSignal(this.route.params.pipe(map(p => p['id'] as string)));

  readonly realisation = computed(() => this.data.getRealisationById(this.id() ?? ''));
  readonly relatedCompetences = computed(() =>
    this.data.getCompetencesByRealisation(this.id() ?? '')
  );
}
