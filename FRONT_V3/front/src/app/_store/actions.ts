import { User, Product } from '@app/_models';

export class SetCurrentUser {
    static readonly type = '[User] Set';
    constructor(public payload: User) {}
}

export class SetOrderBy {
  static readonly type = '[string] Set';
  constructor(public payload: string) {}
}

export class AddProducts {
  static readonly type = '[Product] Add';
  constructor(public payload: Product) {}
}

