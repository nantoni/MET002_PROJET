import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signin(email: string, password: string) {

    const body = new HttpParams()
    .set('email', email)
    .set('password', password);

    return this.http.post<any>(`${environment.apiUrl}/signin`, body.toString(), this.httpOptions)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['catalogue']);
        return user;
      }));

  }

  getToken() {
    return localStorage.getItem('currentUser');
  }

  public get isAuth(): boolean {
    return (this.getToken() !== null) ? true : false;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    this.router.navigate(['']);

  }

}


