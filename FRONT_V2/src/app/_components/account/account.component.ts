import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '@app/_models';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store
    .select(state => state.state.currentUser)
    .subscribe(val => (this.user = val));

    console.log(this.user);
  }

}
