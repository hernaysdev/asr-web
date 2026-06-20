import { Routes } from '@angular/router';

import { LandingComponent } from './features/landing/landing.component';
import { TermsComponent } from './features/terms/terms.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, title: 'ASR Performance & Tuning LLC' },
  { path: 'terms', component: TermsComponent, title: 'Terms & Conditions — ASR Performance & Tuning LLC' },
  { path: '**', redirectTo: '' },
];
