import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__initials">RH</span>
          <div>
            <p class="footer__name">Ruben Hayoun</p>
            <p class="footer__tagline">Développeur Full-Stack · Expert en Ingénierie Logicielle</p>
          </div>
        </div>

        <nav class="footer__nav">
          <a routerLink="/a-propos">À propos</a>
          <a routerLink="/competences">Compétences</a>
          <a routerLink="/realisations">Réalisations</a>
          <a routerLink="/parcours">Parcours</a>
          <a routerLink="/contact">Contact</a>
        </nav>

        <p class="footer__copy">
          © 2026 Ruben Hayoun · Portfolio Master Expert ESIAE
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--color-bg-dark);
      color: rgba(255,255,255,.7);
      padding-block: 3rem 2rem;
      margin-top: auto;
    }
    .footer__inner {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .footer__brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .footer__initials {
      width: 44px;
      height: 44px;
      background: var(--color-accent);
      color: #fff;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .footer__name {
      color: #fff;
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.0625rem;
      margin-bottom: .2rem;
    }
    .footer__tagline { font-size: .8125rem; }
    .footer__nav {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem 1.5rem;
    }
    .footer__nav a {
      font-size: .875rem;
      font-weight: 500;
      color: rgba(255,255,255,.55);
      transition: color .2s;
      &:hover { color: #fff; }
    }
    .footer__copy {
      font-size: .8125rem;
      color: rgba(255,255,255,.35);
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255,255,255,.08);
    }
  `]
})
export class FooterComponent {}
