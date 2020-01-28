import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetCurrentUser } from '@app/_store/actions';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router, private store: Store) {

    if (localStorage.getItem('currentUser') !== undefined) {

      const temp = JSON.parse(localStorage.getItem('currentUser'));

      if (temp !== null) {
        const tempUsr: User = temp;
        tempUsr.token = temp.token;
        this.store.dispatch(
          new SetCurrentUser(tempUsr)
        );
      }

      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();

      console.log(this.currentUserSubject.value);
    }
  }

  public get isAuth(): boolean {
    return (localStorage.getItem('currentUser') !== null) ? true : false;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/signin`, { email, password })
      .pipe(map(user => {
        console.log(user);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', user);
        this.currentUserSubject.next(JSON.parse(user));
        console.log(this.currentUserSubject);
        this.store.dispatch(
          new SetCurrentUser(JSON.parse(user))
        );
        this.router.navigate(['catalogue']);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
