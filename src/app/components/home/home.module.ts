import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { HomeRoutingModule } from './home-routing.module';
import { FooterModule } from 'src/app/_ui/footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        FooterModule,
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
        HomeRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }