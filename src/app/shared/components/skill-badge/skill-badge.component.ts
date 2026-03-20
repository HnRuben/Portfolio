import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Competence } from '../../../core/models';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [routerLink]="['/competences', competence.id]"
      class="skill-badge"
      [class.skill-badge--tech]="competence.type === 'tech'"
      [class.skill-badge--human]="competence.type === 'human'"
      [style.--badge-color]="competence.color"
      [style.--badge-bg]="competence.colorLight"
      [title]="competence.title + ', ' + competence.level"
    >
      <span class="skill-badge__icon">{{ competence.icon }}</span>
      <span class="skill-badge__title">{{ competence.title }}</span>
      <span class="skill-badge__level">{{ competence.level }}</span>
    </a>
  `,
  styles: [`
    .skill-badge {
      display: inline-flex;
      align-items: center;
      gap: .4rem;
      padding: .3rem .75rem .3rem .5rem;
      background: var(--badge-bg, #EEF2FF);
      color: var(--badge-color, #4F46E5);
      border-radius: 999px;
      font-size: .8125rem;
      font-weight: 600;
      transition: all 200ms ease;
      text-decoration: none;
      border: 1.5px solid transparent;
      white-space: nowrap;
    }
    .skill-badge:hover {
      border-color: var(--badge-color);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px color-mix(in srgb, var(--badge-color) 20%, transparent);
    }
    .skill-badge__icon { font-size: .9rem; }
    .skill-badge__title { font-weight: 700; }
    .skill-badge__level {
      font-size: .7rem;
      font-weight: 500;
      opacity: .75;
      padding: .1rem .35rem;
      background: color-mix(in srgb, var(--badge-color) 12%, transparent);
      border-radius: 999px;
    }
  `]
})
export class SkillBadgeComponent {
  @Input({ required: true }) competence!: Competence;
}
