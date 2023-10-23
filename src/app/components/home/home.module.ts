import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { SharedModule } from '../shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        SharedModule,
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