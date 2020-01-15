import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'compte',
    loadChildren: './components/compte/compte.module#CompteModule'
  },
  {
    path: 'catalogue',
    loadChildren: './components/liste/liste.module#ListeModule'
  },
  {
    path: 'detail',
    loadChildren: './components/detail/detail.module#DetailModule'
  },
  {
    path: 'panier',
    loadChildren: './components/panier/panier.module#PanierModule'
  },
  {
    path: 'connexion',
    loadChildren: './components/connexion/connexion.module#ConnexionModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
