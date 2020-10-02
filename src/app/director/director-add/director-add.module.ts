import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { DirectorAddComponent } from './director-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DirectorAddComponent
  }
];

@NgModule({
  declarations: [DirectorAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule
  ],
  exports: [DirectorAddComponent]
})
export class DirectorAddModule { }
