import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { Experience } from '../../core/models';
import { ExperienceModalComponent } from '../../shared/components/experience-modal/experience-modal.component';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [RouterLink, RevealDirective, ExperienceModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {
  private data = inject(DataService);
  readonly experiences = this.data.experiences;
  selectedExperience = signal<Experience | null>(null);

  openModal(exp: Experience): void {
    this.selectedExperience.set(exp);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedExperience.set(null);
    document.body.style.overflow = '';
  }
}
