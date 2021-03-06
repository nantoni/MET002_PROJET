import { Component, OnInit, Injectable } from '@angular/core';

import { Store, State } from '@ngxs/store';
import { AuthenticationService } from '@app/_services';
// import { PanierState } from "../../../../shared/states/panier-state";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  compteurPanier = 0;
  firstName: string;

  constructor(private store: Store, public authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.store
      .select(state => state.state.panier)
      .subscribe(val => {
          this.compteurPanier = val.length;
      });

    this.store
      .select(state => state.state.currentUser)
      .subscribe(val => (this.firstName = val.firstName));

  }

}
