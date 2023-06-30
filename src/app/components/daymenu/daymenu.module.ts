import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaymenuComponent } from './daymenu.component';
import { DaymenuRoutingModule } from './daymenu-routing.module';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DaymenuComponent],
    exports: [DaymenuComponent, DaymenuRoutingModule]
})
export class DaymenuModule { }