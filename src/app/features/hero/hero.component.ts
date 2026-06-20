import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../../core/services/content.service';
import { ScrollService } from '../../core/services/scroll.service';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

@Component({
  selector: 'asr-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UiButtonComponent, UiIconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  readonly content = inject(ContentService);
  private readonly scroll = inject(ScrollService);

  goTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}
