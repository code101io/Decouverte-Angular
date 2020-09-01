import { HomepageViewModule } from './homepage-view/homepage-view.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomepageViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
