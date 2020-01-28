import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@app/_models';
import { AddProduit } from '@app/_store/actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  current: Product = null;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store
      .select(state => state.state.currentProduit)
      .subscribe(val => (this.current = val));

    console.log(this.current);

    if (Object.entries(this.current).length === 0) {
      this.router.navigate(['/catalogue']);
    }
  }

  log(product: Product) {
    console.log(product);
  }

  addProduct(product: Product) {
    this.store.dispatch(new AddProduit(product));
  }

  onProductClick(product: Product) {
    this.addProduct(product);
  }
}
