import { Group, User } from '@app/_models';

export class StateModel {
  currentUser: User;
  orderBy: string;
  orderGroups: Group[];
}
