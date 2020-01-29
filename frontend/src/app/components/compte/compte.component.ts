import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '@app/_models';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  user: User;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store
    .select(state => state.state.currentUser)
    .subscribe(val => (this.user = val));

    console.log(this.user);
  }

}
