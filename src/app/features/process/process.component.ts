import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../../core/services/content.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

@Component({
  selector: 'asr-process',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionTitleComponent, UiButtonComponent, UiIconComponent],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  readonly process = inject(ContentService).process;
  private readonly scroll = inject(ScrollService);

  scrollToTarget(id: string): void {
    this.scroll.scrollTo(id);
  }
}
