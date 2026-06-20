import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ICON_REGISTRY, IconName } from '../../icons/icon-registry';

@Component({
  selector: 'ui-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.viewBox]="viewBox" [attr.width]="size" [attr.height]="size" aria-hidden="true" [innerHTML]="content"></svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
        color: currentColor;
      }
      svg {
        display: block;
      }
    `,
  ],
})
export class UiIconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size: number | string = 24;

  constructor(private readonly sanitizer: DomSanitizer) {}

  get viewBox(): string {
    return ICON_REGISTRY[this.name]?.viewBox ?? '0 0 24 24';
  }

  get content(): SafeHtml {
    const def = ICON_REGISTRY[this.name];
    return this.sanitizer.bypassSecurityTrustHtml(def?.content ?? '');
  }
}
