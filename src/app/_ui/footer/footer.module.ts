import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ButtonModule } from '../button/button.module';
import { SharedModule } from 'src/app/components/shared.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ButtonModule
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule { }