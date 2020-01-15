import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username = '';

  constructor(private authenticationService: AuthenticationService, private router: Router, private store: Store ) { }

  ngOnInit() {
    this.store
    .select(state => state.state.currentUser.firstName)
    .subscribe(val => (this.username = val));
  }

  isAuth() {
    return this.authenticationService.isAuth;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);

  }

}
