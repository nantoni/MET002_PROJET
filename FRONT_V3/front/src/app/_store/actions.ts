import { User, Product } from '@app/_models';

export class SetCurrentUser {
    static readonly type = '[User] Set';
    constructor(public payload: User) {}
}

export class DelCurrentUser {
  static readonly type = '[User] Del';
  constructor() {}
}

export class SetOrderBy {
  static readonly type = '[string] Set';
  constructor(public payload: string) {}
}

export class AddProduit {
  static readonly type = '[Product] Add';
  constructor(public payload: Product) {}
}

export class DelProduit {
  static readonly type = '[Product] Del';
  constructor(public payload: Product) {}
}

export class SetCurrentProduit {
  static readonly type = '[Product] Set';
  constructor(public payload: Product) {}
}
