import { User, Group } from '@app/_models';

export class SetCurrentUser {
    static readonly type = '[User] Set';
    constructor(public payload: User) {}
}

export class SetOrderBy {
  static readonly type = '[string] Set';
  constructor(public payload: string) {}
}

export class AddOrderGroup {
  static readonly type = '[Group] Add';
  constructor(public payload: Group) {}
}

export class DelOrderGroup {
  static readonly type = '[Group] Del';
  constructor(public payload: Group) {}
}
