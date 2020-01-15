import { Component, OnInit } from '@angular/core';

import { User } from '../../../../shared/models/user';

import { CompteService } from '../../compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {


  usr: User = new User;
  password_confirmation : String = "";

  constructor(private compteService: CompteService) { }

  submitToBack() {
    this.compteService.postCompte(this.usr)
    .subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}