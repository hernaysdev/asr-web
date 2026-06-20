import { IconName } from '../../shared/icons/icon-registry';

export interface Value {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}
