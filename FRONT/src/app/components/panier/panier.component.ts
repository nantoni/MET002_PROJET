import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";
import { Produit } from "../../../../shared/models/produit";
import { DelProduit } from "../../../../shared/actions/delProduit-action";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.component.html",
  styleUrls: ["./panier.component.css"]
})
export class PanierComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(state => state.panier.panier)
      .subscribe(val => (this.produits = val));
  }

  log(val) {
    console.log(val);
  }

  delProduit(index: Number) {
    this.store.dispatch(
      new DelProduit(index)
    );
  }

  onProduitRemoveClick(index: Number) {
    this.delProduit(index);
  }
}
