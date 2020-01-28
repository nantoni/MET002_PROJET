import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanierComponent } from './components/panier/panier.component';
import { MerciCommandeComponent } from './components/merci-commande/merci-commande.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { RechercheComponent } from './components/catalogue/recherche/recherche.component';
import { ProduitsComponent } from './components/catalogue/produits/produits.component';
import { CompteComponent } from './components/compte/compte.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    PanierComponent,
    MerciCommandeComponent,
    CatalogueComponent,
    RechercheComponent,
    ProduitsComponent,
    CompteComponent,
    SigninComponent,
    SignupComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
