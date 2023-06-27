import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './_ui/footer/footer.module';
import { HomeModule } from './components/home/home.module';
import { ContactModule } from './components/contact/contact.module';
import { MenuModule } from './components/menu/menu.module';
import { DaymenuModule } from './components/daymenu/daymenu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FooterModule,
    HomeModule,
    ContactModule,
    MenuModule,
    DaymenuModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
