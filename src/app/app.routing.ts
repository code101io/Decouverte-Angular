import { EditViewComponent } from './edit-view/edit-view.component';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomepageViewComponent
  },
  {
    path: 'edit/:id',
    component: EditViewComponent
  }
];