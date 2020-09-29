import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { MovieAddComponent } from './movie-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    MatCardModule,
    FormsModule
  ],
  exports: [MovieAddComponent]
})
export class MovieAddModule { }
