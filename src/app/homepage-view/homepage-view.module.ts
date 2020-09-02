import { FavoriteDirectorPipe } from './../shared/favorite-director.pipe';
import { MovieHighlightDirective } from './../shared/movie-highlight.directive';
import { HeaderComponent } from './../shared/header/header.component';
import { ListComponent } from './list/list.component';
import { HomepageViewComponent } from './homepage-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './list/movie/movie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageViewComponent,
    ListComponent,
    MovieHighlightDirective,
    FavoriteDirectorPipe,
    MovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }
