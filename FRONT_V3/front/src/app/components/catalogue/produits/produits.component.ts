import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { SetCurrentProduit, AddProduit } from '@app/_store/actions';
import { Product } from '@app/_models';
import { DataService } from '@app/_services/data.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  products: Array<Product> = new Array<Product>();

  @Input() filter: string;

  constructor(private store: Store, private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getProducts().subscribe(val => {
      console.log(val);
      this.products = val;
    });
  }

  log(val) {
    console.log(val);
  }

  addProduct(product: Product) {
    this.store.dispatch(
      new AddProduit(product)
    );
  }

  setCurrentProduct(product: Product) {
    this.store.dispatch(
      new SetCurrentProduit(product)
    );
  }

  onProductAddClick(product: Product) {
    this.addProduct(product);
    this.log(product);
  }

  detail(product: Product) {
    this.setCurrentProduct(product);
    this.router.navigate(['/detail']);
  }

}
