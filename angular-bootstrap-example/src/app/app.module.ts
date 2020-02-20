import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApparelsComponent } from './apparels/apparels.component';
import { ShoesComponent } from './shoes/shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApparelsComponent,
    ShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
