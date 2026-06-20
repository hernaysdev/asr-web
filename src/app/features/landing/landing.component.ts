import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FaqComponent } from '../faq/faq.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'asr-landing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent,
  ],
  template: `
    <asr-hero></asr-hero>
    <asr-services></asr-services>
    <asr-about></asr-about>
    <asr-gallery></asr-gallery>
    <asr-faq></asr-faq>
    <asr-contact></asr-contact>
  `,
})
export class LandingComponent {}
