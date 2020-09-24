import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { MovieAddComponent } from './movie-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MovieAddComponent
  }
];

@NgModule({
  declarations: [MovieAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  exports: [MovieAddComponent]
})
export class MovieAddModule { }
