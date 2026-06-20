import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ContentService } from '../../core/services/content.service';
import { ScrollService } from '../../core/services/scroll.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

@Component({
  selector: 'asr-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UiIconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private readonly scroll = inject(ScrollService);
  private readonly router = inject(Router);
  readonly content = inject(ContentService);
  readonly active$ = this.scroll.active();

  ngOnInit(): void {
    this.observeOnLanding();
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.observeOnLanding());
  }

  goTo(id: string, event: Event): void {
    event.preventDefault();
    if (this.router.url.split('?')[0].split('#')[0] !== '/') {
      this.router.navigate(['/'], { fragment: id });
      return;
    }
    this.scroll.scrollTo(id);
  }

  private observeOnLanding(): void {
    if (this.router.url.split('?')[0].split('#')[0] !== '/') {
      this.scroll.disconnect();
      return;
    }
    queueMicrotask(() =>
      this.scroll.observe(['hero', ...this.content.navLinks.map((n) => n.id)]),
    );
  }
}
