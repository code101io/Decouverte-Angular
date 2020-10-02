import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { DirectorEditComponent } from './director-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DirectorEditComponent
  }
];

@NgModule({
  declarations: [DirectorEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DirectorEditComponent]
})
export class DirectorEditModule { }
