import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Ruben Hayoun — Portfolio'
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'À propos — Ruben Hayoun'
  },
  {
    path: 'competences',
    loadComponent: () => import('./pages/competences/competences.component').then(m => m.CompetencesComponent),
    title: 'Compétences — Ruben Hayoun'
  },
  {
    path: 'competences/:id',
    loadComponent: () => import('./pages/competence-detail/competence-detail.component').then(m => m.CompetenceDetailComponent),
  },
  {
    path: 'realisations',
    loadComponent: () => import('./pages/realisations/realisations.component').then(m => m.RealisationsComponent),
    title: 'Réalisations — Ruben Hayoun'
  },
  {
    path: 'realisations/:id',
    loadComponent: () => import('./pages/realisation-detail/realisation-detail.component').then(m => m.RealisationDetailComponent),
  },
  {
    path: 'parcours',
    loadComponent: () => import('./pages/parcours/parcours.component').then(m => m.ParcoursComponent),
    title: 'Parcours — Ruben Hayoun'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Ruben Hayoun'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
