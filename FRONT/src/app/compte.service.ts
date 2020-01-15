import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../shared/models/user';


import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable()
export class CompteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }

  constructor(private http: HttpClient) { }

  public postCompte(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(environment.apiUrl + '/api/client', user, this.httpOptions);
  }

}