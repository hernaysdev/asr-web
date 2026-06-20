import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../../core/services/content.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

@Component({
  selector: 'asr-faq',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionTitleComponent, UiIconComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  readonly content = inject(ContentService);
  readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  isOpen(index: number): boolean {
    return this.openIndex() === index;
  }
}
