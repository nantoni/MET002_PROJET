import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProduitPipe } from "../../produit.pipe";
import { ProduitService } from "../../produit.service";
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte.component';
import { FormsModule } from '@angular/forms';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: CompteComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [CompteComponent],
  exports: [RouterModule]
})
export class CompteModule {}
