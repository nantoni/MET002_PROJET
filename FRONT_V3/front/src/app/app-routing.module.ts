import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () => import('./components/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./components/catalogue/catalogue.module').then(m => m.CatalogueModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./components/compte/compte.module').then(m => m.CompteModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'merci-commande',
    loadChildren: () => import('./components/merci-commande/merci-commande.module').then(m => m.MerciCommandeModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./components/panier/panier.module').then(m => m.PanierModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule)
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
