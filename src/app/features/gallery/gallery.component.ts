import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../../core/services/content.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

const AUTOPLAY_MS = 5000;

@Component({
  selector: 'asr-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionTitleComponent, UiIconComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  readonly images = inject(ContentService).galleryImages;
  readonly current = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  private paused = false;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  next(): void {
    this.current.update((i) => (i + 1) % this.images.length);
    this.restart();
  }

  prev(): void {
    this.current.update((i) => (i - 1 + this.images.length) % this.images.length);
    this.restart();
  }

  goTo(index: number): void {
    this.current.set(index);
    this.restart();
  }

  onMouseEnter(): void {
    this.paused = true;
    this.stop();
  }

  onMouseLeave(): void {
    this.paused = false;
    this.start();
  }

  @HostListener('keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    }
  }

  private start(): void {
    if (this.paused || this.timer || this.images.length <= 1) return;
    this.timer = setInterval(() => {
      this.current.update((i) => (i + 1) % this.images.length);
    }, AUTOPLAY_MS);
  }

  private stop(): void {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = undefined;
  }

  private restart(): void {
    this.stop();
    this.start();
  }
}
