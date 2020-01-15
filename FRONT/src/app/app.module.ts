import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MoteurComponent } from "./components/moteur/moteur.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgxsModule } from "@ngxs/store";
import { PanierState } from "../../shared/states/panier-state";
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component'
import { Routes, RouterModule } from '@angular/router';
import { CompteService } from './compte.service';


const appRoutes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([PanierState]),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MoteurComponent,
    AccueilComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  providers: [CompteService],
})
export class AppModule {}
