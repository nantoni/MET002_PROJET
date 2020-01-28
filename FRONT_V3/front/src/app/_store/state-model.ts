import { Product, User } from '@app/_models';

export class StateModel {
  currentUser: User;
  orderBy: string;
  panier: Product[];
  currentProduit: Product;
}
