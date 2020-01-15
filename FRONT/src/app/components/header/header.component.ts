import { Component, OnInit, Injectable } from '@angular/core';

import { Store } from "@ngxs/store";
import { PanierState } from "../../../../shared/states/panier-state";

import { AuthenticationService } from "../../authentication.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  compteurPanier: number = 0;

  constructor(private store: Store, public authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.store
      .select(state => state.panier.panier)
      .subscribe(val => this.compteurPanier = val.length);
  }

}