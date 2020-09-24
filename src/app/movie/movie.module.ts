import { MovieEditModule } from './movie-edit/movie-edit.module';
import { MovieAddModule } from './movie-add/movie-add.module';
import { movieRoutes } from './movie.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes),
    MovieAddModule,
    MovieEditModule
  ]
})
export class MovieModule { }
