import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'asr-section-title',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="section-title" [class.section-title--center]="align === 'center'">
      <span class="section-title__eyebrow" *ngIf="eyebrow">// {{ eyebrow }}</span>
      <h2 class="section-title__heading display">
        <span>{{ leading }}</span>
        <span class="accent" *ngIf="accent"> {{ accent }}</span>
      </h2>
      <span class="section-title__divider" *ngIf="divider"></span>
    </header>
  `,
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  @Input() eyebrow?: string;
  @Input({ required: true }) leading!: string;
  @Input() accent?: string;
  @Input() divider = true;
  @Input() align: 'start' | 'center' = 'start';
}
