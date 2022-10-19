import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { ViewallrecipeComponent } from './viewallrecipe/viewallrecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddrecipeComponent,
    ViewallrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
