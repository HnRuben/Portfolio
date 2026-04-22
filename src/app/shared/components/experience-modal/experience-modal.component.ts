import { Component, ChangeDetectionStrategy, input, output, inject, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Experience, Competence, Realisation } from '../../../core/models';
import { DataService } from '../../../core/services/data.service';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-experience-modal',
  standalone: true,
  imports: [RouterLink, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-modal.component.html',
  styleUrl: './experience-modal.component.scss'
})
export class ExperienceModalComponent {
  readonly experience = input.required<Experience>();
  readonly closed = output<void>();

  private data = inject(DataService);

  @HostListener('document:keydown.escape')
  close(): void {
    this.closed.emit();
  }

  getRealisationById(id: string): Realisation | undefined {
    return this.data.getRealisationById(id);
  }

  getCompetenceById(id: string): Competence | undefined {
    return this.data.getCompetenceById(id);
  }
}
