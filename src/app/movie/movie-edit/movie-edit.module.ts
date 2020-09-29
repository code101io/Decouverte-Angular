import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { MovieEditComponent } from './movie-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MovieEditComponent
  }
];

@NgModule({
  declarations: [MovieEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MovieEditComponent]
})
export class MovieEditModule { }
