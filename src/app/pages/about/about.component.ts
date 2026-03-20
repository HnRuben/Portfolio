import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly values = [
    { icon: '🎯', label: 'Rigueur', desc: 'Du code propre, testé et maintenable.' },
    { icon: '🚀', label: 'Curiosité', desc: 'Toujours en veille sur les nouvelles technologies.' },
    { icon: '🤝', label: 'Collaboration', desc: 'L\'équipe avant tout, le code est un sport collectif.' },
    { icon: '💡', label: 'Créativité', desc: 'Trouver des solutions élégantes à des problèmes complexes.' },
  ];

  readonly interests = ['Développement Web', 'Open Source', 'Algorithmes', 'Jeux vidéo', 'Architecture logicielle', 'IA & ML'];
}
