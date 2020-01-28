import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil.component';
import { FormsModule } from '@angular/forms';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [AccueilComponent],
  exports: [RouterModule]
})
export class AccueilModule {}
