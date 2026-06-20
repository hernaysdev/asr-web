import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../../core/services/content.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'asr-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionTitleComponent, UiIconComponent, UiButtonComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  readonly content = inject(ContentService);
  private readonly scroll = inject(ScrollService);

  scheduleAppointment(): void {
    this.scroll.scrollTo('contact');
  }
}
