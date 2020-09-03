import { HeaderModule } from './../shared/header/header.module';
import { EditViewComponent } from './edit-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EditViewComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [EditViewComponent]
})
export class EditViewModule { }
