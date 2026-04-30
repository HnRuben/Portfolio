import { Component, ChangeDetectionStrategy, inject, computed, signal, HostListener } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';
import { MdInlinePipe } from '../../shared/pipes/md-inline.pipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-realisation-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective, SkillBadgeComponent, SafeHtmlPipe, MdInlinePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './realisation-detail.component.html',
  styleUrl: './realisation-detail.component.scss'
})
export class RealisationDetailComponent {
  private readonly data = inject(DataService);
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(this.route.params.pipe(map(p => p['id'] as string)));

  readonly realisation = computed(() => this.data.getRealisationById(this.id() ?? ''));
  readonly relatedCompetences = computed(() =>
    this.data.getCompetencesByRealisation(this.id() ?? '')
  );

  readonly lightboxIndex = signal<number | null>(null);

  openLightbox(i: number)  { this.lightboxIndex.set(i); }
  closeLightbox()          { this.lightboxIndex.set(null); }

  prevImage(total: number) {
    const i = this.lightboxIndex();
    if (i !== null) this.lightboxIndex.set((i - 1 + total) % total);
  }

  nextImage(total: number) {
    const i = this.lightboxIndex();
    if (i !== null) this.lightboxIndex.set((i + 1) % total);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    const i = this.lightboxIndex();
    if (i === null) return;
    const images = this.realisation()?.images;
    if (!images?.length) return;
    if (e.key === 'Escape')     this.closeLightbox();
    if (e.key === 'ArrowRight') this.nextImage(images.length);
    if (e.key === 'ArrowLeft')  this.prevImage(images.length);
  }
}
