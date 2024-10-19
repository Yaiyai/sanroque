
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubvencionesComponent } from './subvenciones.component';

const routes: Routes = [
    { path: '', component: SubvencionesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubvencionesRoutingModule { }
