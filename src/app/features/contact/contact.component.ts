import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactPayload } from '../../core/models/contact-form.model';
import { ContentService } from '../../core/services/content.service';
import { EmailService } from '../../core/services/email.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button.component';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'asr-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent, UiButtonComponent, UiIconComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly content = inject(ContentService);

  readonly status = signal<SendStatus>('idle');

  readonly form = this.fb.nonNullable.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    vehicleMake: [''],
    vehicleYear: [''],
    model: [''],
    message: ['', [Validators.required, Validators.minLength(8)]],
  });

  get mapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.content.contact.mapEmbed);
  }

  submit(): void {
    if (this.form.invalid || this.status() === 'sending') {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const payload = this.form.getRawValue() as ContactPayload;

    this.emailService.send(payload).subscribe({
      next: () => {
        this.status.set('success');
        this.form.reset();
      },
      error: () => this.status.set('error'),
    });
  }

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const ctrl = this.form.controls[controlName];
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }
}
