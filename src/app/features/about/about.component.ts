import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../../core/services/content.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

@Component({
  selector: 'asr-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionTitleComponent, UiButtonComponent, UiIconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly content = inject(ContentService);
  private readonly scroll = inject(ScrollService);

  scheduleAppointment(): void {
    this.scroll.scrollTo('contact');
  }
}
