import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SubvencionesRoutingModule } from './subvenciones-routing.module';
import { SubvencionesComponent } from './subvenciones.component';
@NgModule({
    imports: [
        CommonModule,
        PipesModule,
    ],
    declarations: [SubvencionesComponent],
    exports: [SubvencionesComponent, SubvencionesRoutingModule]
})
export class SubvencionesModule { }