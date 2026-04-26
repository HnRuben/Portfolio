import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

const ICON_CURIOSITE = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`;

const ICON_COLLABORATION = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

const ICON_RIGUEUR = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;

const ICON_COMMUNICATION = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`;


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly values: { icon: string; label: string; desc: string }[] = [
    {
      icon: ICON_CURIOSITE,
      label: 'Curiosité',
      desc: "Apprendre en faisant, explorer de nouvelles technologies et sortir régulièrement de ma zone de confort."
    },
    {
      icon: ICON_COLLABORATION,
      label: 'Collaboration',
      desc: "Les bons projets reposent sur une équipe soudée. Le code, c'est avant tout une histoire de collaboration."
    },
    {
      icon: ICON_RIGUEUR,
      label: 'Rigueur',
      desc: "Prendre le temps de bien comprendre un problème avant de proposer une solution, même si ça demande davantage d'efforts."
    },
    {
      icon: ICON_COMMUNICATION,
      label: 'Communication',
      desc: "Adapter son discours à ses interlocuteurs, qu'ils soient techniques ou non."
    },
  ];

  readonly interests: string[] = [
    'Basketball',
    'Vélo',
    'Escalade',
    'Création graphique',
    'Jeux vidéo',
    'Architecture logicielle'
  ];
}
