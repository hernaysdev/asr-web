import { InjectionToken } from '@angular/core';

export interface EmailJsConfig {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
}

export const EMAILJS_CONFIG = new InjectionToken<EmailJsConfig>('EMAILJS_CONFIG');
