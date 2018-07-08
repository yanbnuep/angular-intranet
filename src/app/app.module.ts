import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


import {HomeModule} from './home/home.module';

import {HeaderComponent} from './shared';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule, // Share Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
