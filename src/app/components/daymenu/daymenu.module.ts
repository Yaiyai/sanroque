import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaymenuComponent } from './daymenu.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DaymenuComponent],
    exports: [DaymenuComponent]
})
export class DaymenuModule { }