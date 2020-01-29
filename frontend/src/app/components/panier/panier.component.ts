import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '@app/_models';
import { DelProduit } from '@app/_store/actions';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(state => state.state.panier)
      .subscribe(val => (this.products = val));
  }

  log(val) {
    console.log(val);
  }

  delProduit(index: number) {
    this.store.dispatch(
      new DelProduit(index)
    );
  }

  onProduitRemoveClick(index: number) {
    this.delProduit(index);
  }
}
