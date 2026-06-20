import { IconName } from '../../shared/icons/icon-registry';

export interface Service {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}
