import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {
  private data = inject(DataService);
  readonly experiences = this.data.experiences;
}
