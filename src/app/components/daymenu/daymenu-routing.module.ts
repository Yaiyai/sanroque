import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaymenuComponent } from './daymenu.component';

const routes: Routes = [
    { path: '', component: DaymenuComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DaymenuRoutingModule { }
