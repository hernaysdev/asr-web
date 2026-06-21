export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
}

export interface ProcessContent {
  readonly id: string;
  readonly label: string;
  readonly titleTop: string;
  readonly titleAccent: string;
  readonly subtitle: string;
  readonly steps: readonly ProcessStep[];
  readonly cta: {
    readonly text: string;
    readonly subtext: string;
    readonly buttonLabel: string;
    readonly scrollTo: string;
  };
}
