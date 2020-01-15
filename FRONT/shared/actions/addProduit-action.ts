import { Produit } from '../models/produit'

export class AddProduit {
    static readonly type = '[Produit] Add';
    
    constructor(public payload: Produit) {}
}