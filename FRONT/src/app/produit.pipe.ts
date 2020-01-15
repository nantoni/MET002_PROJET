import { Pipe, PipeTransform } from "@angular/core";
import { Produit } from "../../shared/models/produit";

@Pipe({
  name: "produit"
})
export class ProduitPipe implements PipeTransform {
  transform(produits: Produit[], filtre: string): any {
    console.log(filtre);
    switch (filtre) {
      case "priceAsc": {
        return produits.sort((a, b) => {
          return a.prix < b.prix ? -1 : a.prix > b.prix ? 1 : 0;
        });
        break;
      }
      case "priceDesc": {
        return produits.sort((a, b) => {
          return a.prix > b.prix ? -1 : a.prix < b.prix ? 1 : 0;
        });
        break;
      }
      case "sizeAsc": {
        return produits.sort((a, b) => {
          return a.taille < b.taille ? -1 : a.taille > b.taille ? 1 : 0;
        });
        break;
      }
      case "sizeDesc": {
        return produits.sort((a, b) => {
          return a.taille > b.taille ? -1 : a.taille < b.taille ? 1 : 0;
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
