import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaymenuComponent } from './daymenu.component';
import { DaymenuRoutingModule } from './daymenu-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [DaymenuComponent],
    exports: [DaymenuComponent, DaymenuRoutingModule]
})
export class DaymenuModule { }