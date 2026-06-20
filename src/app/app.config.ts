import { ApplicationConfig } from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { EMAILJS_CONFIG, EmailJsConfig } from './core/tokens/emailjs-config.token';

const emailJsConfig: EmailJsConfig = environment.emailjs;

const scrollOptions: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrolling: InMemoryScrollingFeature = withInMemoryScrolling(scrollOptions);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrolling),
    { provide: EMAILJS_CONFIG, useValue: emailJsConfig },
  ],
};
