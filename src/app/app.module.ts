import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiMenuService } from './communication/api-menu.service';
import { FooterModule } from './_ui/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FooterModule,
  ],
  providers: [ApiMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
