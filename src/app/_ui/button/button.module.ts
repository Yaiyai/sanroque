import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/components/shared.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ButtonComponent],
    exports: [ButtonComponent]
})
export class ButtonModule { }