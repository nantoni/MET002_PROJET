import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {

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
