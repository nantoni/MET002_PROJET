import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './produits/produits.component';
import { RechercheComponent } from './recherche/recherche.component';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: CatalogueComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [CatalogueComponent, ProduitsComponent, RechercheComponent],
  exports: [RouterModule]
})
export class CatalogueModule {}
