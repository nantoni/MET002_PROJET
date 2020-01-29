import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetOrderBy } from '@app/_store/actions';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {


  orderList: string[] = [
    'Tous',
    '3L',
    '2L',
    '1.5L',
    '0.75L',
    '0.5L'
  ];

  orderBy: string = this.orderList[0];


  constructor(private store: Store) { }

  ngOnInit() { }

  order(param: string) {
    this.orderBy = param;
    this.store.dispatch(
      new SetOrderBy(param)
    );
  }

}
