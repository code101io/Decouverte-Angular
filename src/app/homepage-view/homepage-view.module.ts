import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from './../shared/header/header.module';
import { FavoriteDirectorPipe } from './../shared/favorite-director.pipe';
import { MovieHighlightDirective } from './../shared/movie-highlight.directive';
import { ListComponent } from './list/list.component';
import { HomepageViewComponent } from './homepage-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './list/movie/movie.component';
import { MatCardModule } from '@angular/material/card';
import { DirectorComponent } from './list/director/director.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageViewComponent
  }
];

@NgModule({
  declarations: [
    HomepageViewComponent,
    ListComponent,
    MovieHighlightDirective,
    FavoriteDirectorPipe,
    MovieComponent,
    DirectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }
