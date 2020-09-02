import { FavoriteDirectorPipe } from './../shared/favorite-director.pipe';
import { MovieHighlightDirective } from './../shared/movie-highlight.directive';
import { HeaderComponent } from './../shared/header/header.component';
import { ListComponent } from './list/list.component';
import { HomepageViewComponent } from './homepage-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageViewComponent,
    ListComponent,
    MovieHighlightDirective,
    FavoriteDirectorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }
