import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProduitPipe } from '@app/produit.pipe';
import { DetailComponent } from './detail.component';


// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: DetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [DetailComponent],
  exports: [RouterModule]
})
export class DetailModule {}
