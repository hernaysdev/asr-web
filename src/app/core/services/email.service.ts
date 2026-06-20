import { Inject, Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Observable, from } from 'rxjs';

import { ContactPayload } from '../models/contact-form.model';
import { EMAILJS_CONFIG, EmailJsConfig } from '../tokens/emailjs-config.token';

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor(@Inject(EMAILJS_CONFIG) private readonly cfg: EmailJsConfig) {}

  send(payload: ContactPayload): Observable<EmailJSResponseStatus> {
    return from(
      emailjs.send(this.cfg.serviceId, this.cfg.templateId, { ...payload }, { publicKey: this.cfg.publicKey }),
    );
  }
}
