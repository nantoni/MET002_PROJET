import { Produit } from '../models/produit'

export class SetCurrentProduit {
    static readonly type = '[Produit] Set';

    constructor(public payload: Produit) {}
}