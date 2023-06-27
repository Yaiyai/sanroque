import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './_ui/navbar/navbar.module';
import { FooterModule } from './_ui/footer/footer.module';
import { ApiMenuService } from './communication/api-menu.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule
  ],
  providers: [ApiMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
