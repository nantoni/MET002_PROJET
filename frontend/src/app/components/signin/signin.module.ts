import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Commit won't pass
const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  declarations: [SigninComponent],
  exports: [RouterModule]
})
export class SigninModule {}
