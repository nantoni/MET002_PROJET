import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./components/catalogue/catalogue.module').then(m => m.CatalogueModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'compte',
    loadChildren: () => import('./components/compte/compte.module').then(m => m.CompteModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'merci-commande',
    loadChildren: () => import('./components/merci-commande/merci-commande.module').then(m => m.MerciCommandeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'panier',
    loadChildren: () => import('./components/panier/panier.module').then(m => m.PanierModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./components/detail/detail.module').then(m => m.DetailModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule)
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
