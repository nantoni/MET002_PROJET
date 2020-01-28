import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {
    if (localStorage.getItem('panier') !== undefined) {

      const temp = JSON.parse(localStorage.getItem('panier'));

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

  getProducts() {
    return this.http.get<any>(`${environment.apiUrl}/api/produits`)
    .pipe(map(res => {
      console.log(res);
      return res.data;
    }));
  }

  getProduct(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/api/produits${id}`)
      .pipe(map(res => {
        return res;
      }));
  }

}
