import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion.component';
import { FormsModule } from '@angular/forms';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: ConnexionComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [ConnexionComponent],
  exports: [RouterModule]
})
export class ConnexionModule {}
