import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreenBtnJossModule } from 'green-btn-joss';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GreenBtnJossModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
