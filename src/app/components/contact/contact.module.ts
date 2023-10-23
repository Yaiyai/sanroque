import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ButtonModule } from 'src/app/_ui/button/button.module';
import { SharedModule } from '../shared.module';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        SharedModule,
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent, ContactRoutingModule]
})
export class ContactModule { }