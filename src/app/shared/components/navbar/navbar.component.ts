import {
  Component, ChangeDetectionStrategy, signal,
  HostListener, OnInit, inject
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);

  scrolled = signal(false);
  menuOpen = signal(false);

  readonly navLinks = [
    { path: '/a-propos',    label: 'À propos' },
    { path: '/competences', label: 'Compétences' },
    { path: '/realisations',label: 'Réalisations' },
    { path: '/parcours',    label: 'Parcours' },
    { path: '/contact',     label: 'Contact' },
  ];

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuOpen.set(false);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
