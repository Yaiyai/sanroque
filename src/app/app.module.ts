import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './_ui/navbar/navbar.module';
import { FooterModule } from './_ui/footer/footer.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    PipesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
