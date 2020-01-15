import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProduitPipe } from "../../produit.pipe";
import { ProduitService } from "../../produit.service";
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: DetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DetailComponent],
  exports: [RouterModule]
})
export class DetailModule {}
