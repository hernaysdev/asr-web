import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ContentService } from '../../../core/services/content.service';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'asr-message-fab',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UiIconComponent],
  template: `
    <a
      class="message-fab"
      [href]="messaging.url"
      aria-label="Text us"
    >
      <ui-icon name="message" [size]="28"></ui-icon>
      <span class="message-fab__tooltip">Text us</span>
    </a>
  `,
  styleUrls: ['./message-fab.component.scss'],
})
export class MessageFabComponent {
  readonly messaging = inject(ContentService).messaging;
}
