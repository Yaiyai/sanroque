import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaComponent } from './politica.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PoliticaRoutingModule } from './politica-routing.module';
@NgModule({
    imports: [
        CommonModule,
        PipesModule,
    ],
    declarations: [PoliticaComponent],
    exports: [PoliticaComponent, PoliticaRoutingModule]
})
export class PoliticaModule { }