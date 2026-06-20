import { IconName } from '../../shared/icons/icon-registry';

export interface TermsItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface TermsContent {
  readonly label: string;
  readonly titleTop: string;
  readonly titleAccent: string;
  readonly intro: string;
  readonly overviewTitle: string;
  readonly overviewSubtitle: string;
  readonly items: readonly TermsItem[];
  readonly cta: {
    readonly text: string;
    readonly buttonLabel: string;
    readonly href: string;
  };
  readonly importantNotice: string;
}
