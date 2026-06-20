import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiIconComponent } from '../ui-icon/ui-icon.component';

export type UiButtonVariant = 'primary' | 'outline';

@Component({
  selector: 'ui-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UiIconComponent],
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [class.ui-button--primary]="variant === 'primary'"
      [class.ui-button--outline]="variant === 'outline'"
      [class.ui-button--block]="block"
      class="ui-button"
    >
      <span class="ui-button__label"><ng-content></ng-content></span>
      <span class="ui-button__icon" *ngIf="showArrow">
        <ui-icon name="arrow-right" [size]="18"></ui-icon>
      </span>
    </button>
  `,
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {
  @Input() variant: UiButtonVariant = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() showArrow = true;
  @Input() block = false;
}
