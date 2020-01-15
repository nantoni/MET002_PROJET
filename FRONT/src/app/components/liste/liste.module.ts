import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListeComponent } from "./liste.component";
import { ProduitPipe } from "../../produit.pipe";
import { ProduitService } from "../../produit.service";
import { RouterModule, Routes } from '@angular/router';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: ListeComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ListeComponent, ProduitPipe],
  providers: [ProduitService],
  exports: [RouterModule]
})
export class ListeModule {}
