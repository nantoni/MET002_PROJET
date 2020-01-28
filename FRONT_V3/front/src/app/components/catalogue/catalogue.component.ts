import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/_services/data.service';
import { Store } from '@ngxs/store';
import { Product } from '@app/_models';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  userId: number;
  // products: Product[];
  loading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(res => {
      // this.products = products;
      console.log(res);
    });
    // this.store
    // .subscribe(val => {
    //   this.userId = val;
    //   // Get userGroups
    //   console.log(this.userId);
    //   // Get posts
    //   this.dataService.getProducts().subscribe(products => {
    //     // this.products = products;
    //     // console.log(products);
    //   });
    // });
  }

}
