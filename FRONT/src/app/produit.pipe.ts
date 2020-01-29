import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './_models';

@Pipe({
  name: 'produit'
})
export class ProduitPipe implements PipeTransform {
  transform(produits: Product[], filtre: string): any {
    console.log(filtre);
    switch (filtre) {
      case 'priceAsc': {
        return produits.sort((a, b) => {
          return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
        });
        break;
      }
      case 'priceDesc': {
        return produits.sort((a, b) => {
          return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
        });
        break;
      }
      case 'sizeAsc': {
        return produits.sort((a, b) => {
          return a.size < b.size ? -1 : a.size > b.size ? 1 : 0;
        });
        break;
      }
      case 'sizeDesc': {
        return produits.sort((a, b) => {
          return a.size > b.size ? -1 : a.size < b.size ? 1 : 0;
        });
        break;
      }
      default: {
        return produits;
        break;
      }
    }
  }
}
