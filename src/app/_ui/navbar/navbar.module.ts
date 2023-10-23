import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonModule } from '../button/button.module';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        SharedModule,
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }