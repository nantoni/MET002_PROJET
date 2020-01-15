import { Produit } from '../models/produit'

export class DelProduit {
    static readonly type = '[Number] Del';
    
    constructor(public payload: Number) {}
}