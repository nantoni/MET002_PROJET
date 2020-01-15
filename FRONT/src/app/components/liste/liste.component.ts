import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { ProduitService } from "../../produit.service";
import { Produit } from "../../../../shared/models/produit";

import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";
import { AddProduit } from "../../../../shared/actions/addProduit-action";
import { Router } from '@angular/router';
import { SetCurrentProduit } from '../../../../shared/actions/setCurrentProduit-action'


@Component({
  selector: "app-liste",
  templateUrl: "./liste.component.html",
  styleUrls: ["./liste.component.css"]
})
export class ListeComponent implements OnInit {
  produits: Produit[] = [];

  @Input() filter: string;

  constructor(private store: Store, private produitService: ProduitService, private router: Router) {}

  ngOnInit() {
    this.produitService.getProduits().subscribe(val => (this.produits = val));

    this.store
      .select(state => state.panier.panier)
      .subscribe(val => this.log(val.length));
  }

  log(val) {
    console.log(val);
  }

  addProduit(produit: Produit) {
    this.store.dispatch(
      new AddProduit(produit)
    );
  }

  setCurrentProduit(produit: Produit) {
    this.store.dispatch(
      new SetCurrentProduit(produit)
    );
  }

  onProduitAddClick(produit: Produit) {
    this.addProduit(produit);
    this.log(produit);
  }

  detail(produit: Produit){
    this.setCurrentProduit(produit);
    this.router.navigate(['detail']);
  }
}
