import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier.component';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: PanierComponent
  }
]; 

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PanierComponent],
  exports: [RouterModule]
})
export class PanierModule {}
