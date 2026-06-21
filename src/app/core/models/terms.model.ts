import { IconName } from '../../shared/icons/icon-registry';

export interface TermsItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface TermsFullClause {
  readonly number: string;
  readonly title: string;
  readonly body: string;
}

export interface TermsFullSection {
  readonly title: string;
  readonly intro: string;
  readonly clauses: readonly TermsFullClause[];
  readonly importantNotice: string;
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
  readonly fullTermsTitle: string;
  readonly fullTermsSubtitle: string;
  readonly fullTerms: readonly TermsFullSection[];
}
