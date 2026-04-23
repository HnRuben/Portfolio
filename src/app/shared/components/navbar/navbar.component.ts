import {
  Component, ChangeDetectionStrategy, signal,
  HostListener, OnInit, inject
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from '../../../core/services/data.service';

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
  private readonly data = inject(DataService);

  scrolled = signal(false);
  menuOpen = signal(false);
  openDropdown = signal<string | null>(null);

  readonly competenceItems = this.data.competences.map(c => ({
    path: `/competences/${c.id}`,
    label: c.title
  }));

  readonly realisationItems = this.data.realisations.map(r => ({
    path: `/realisations/${r.id}`,
    label: r.shortTitle
  }));

  readonly navLinks: { path: string; label: string; dropdown?: string }[] = [
    { path: '/a-propos',     label: 'À propos' },
    { path: '/competences',  label: 'Compétences',  dropdown: 'competences' },
    { path: '/realisations', label: 'Réalisations', dropdown: 'realisations' },
    { path: '/parcours',     label: 'Parcours' },
    { path: '/contact',      label: 'Contact' },
  ];

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuOpen.set(false);
      this.openDropdown.set(null);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  openMenu(key: string): void {
    this.openDropdown.set(key);
  }

  closeMenu(): void {
    this.openDropdown.set(null);
  }

  toggleMobileDropdown(key: string): void {
    this.openDropdown.update(v => v === key ? null : key);
  }
}
