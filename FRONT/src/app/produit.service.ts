import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { environment } from '../environments/environment';


@Injectable()
export class ProduitService {

  constructor(private http:HttpClient) { }
    public getProduits () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendProduit);
    }
}