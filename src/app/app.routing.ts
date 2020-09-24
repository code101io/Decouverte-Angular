import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage-view/homepage-view.module').then(m => m.HomepageViewModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  }
];