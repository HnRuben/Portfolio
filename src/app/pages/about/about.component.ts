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
    { icon: '🚀', label: 'Curiosité', desc: 'Apprendre en faisant, explorer de nouvelles technologies et sortir régulièrement de ma zone de confort.' },
    { icon: '🤝', label: 'Collaboration', desc: 'Les bons projets reposent sur une équipe soudée. Le code, c’est avant tout une histoire de collaboration.' },
    { icon: '🎯', label: 'Rigueur', desc: 'Prendre le temps de bien comprendre un problème avant de proposer une solution, même si ça demande davantage d\'efforts.' },
    { icon: '💬', label: 'Communication', desc: 'Adapter son discours à ses interlocuteurs, qu\'ils soient techniques ou non.' },
  ];

  readonly interests = ['Basketball & Vélo', 'Création graphique', 'Jeux vidéo', 'IA & Machine Learning', 'Architecture logicielle'];
}