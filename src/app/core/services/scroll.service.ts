import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly activeSection$ = new BehaviorSubject<string>('hero');
  private observer?: IntersectionObserver;

  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  scrollTo(id: string): void {
    const el = this.doc.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  observe(sectionIds: readonly string[]): void {
    this.disconnect();
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.activeSection$.next(visible.target.id);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const id of sectionIds) {
      const el = this.doc.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  active(): Observable<string> {
    return this.activeSection$.asObservable();
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
