import { DirectorEditModule } from './director-edit/director-edit.module';
import { DirectorAddModule } from './director-add/director-add.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { directorRoutes } from './director.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(directorRoutes),
    DirectorAddModule,
    DirectorEditModule
  ]
})
export class DirectorModule { }
