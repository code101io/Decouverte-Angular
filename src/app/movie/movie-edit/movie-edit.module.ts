import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { MovieEditComponent } from './movie-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MatCardModule
  ],
  exports: [MovieEditComponent]
})
export class MovieEditModule { }
