import { Component, OnInit } from "@angular/core";
import { Produit } from "../../../../shared/models/produit";

import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";
import { AddProduit } from "../../../../shared/actions/addProduit-action";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  current: Produit;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store
      .select(state => state.panier.current)
      .subscribe(val => (this.current = val));
    console.log(this.current);
  }

  log(produit: Produit) {
    console.log(produit);
  }

  addProduit(produit: Produit) {
    this.store.dispatch(new AddProduit(produit));
  }

  onProduitClick(produit: Produit) {
    this.addProduit(produit);
  }
}
