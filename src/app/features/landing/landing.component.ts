import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FaqComponent } from '../faq/faq.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HeroComponent } from '../hero/hero.component';
import { ProcessComponent } from '../process/process.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'asr-landing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    ServicesComponent,
    ProcessComponent,
    AboutComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent,
  ],
  template: `
    <asr-hero></asr-hero>
    <asr-services></asr-services>
    <asr-process></asr-process>
    <asr-gallery></asr-gallery>
    <asr-about></asr-about>
    <asr-faq></asr-faq>
    <asr-contact></asr-contact>
  `,
})
export class LandingComponent {}
