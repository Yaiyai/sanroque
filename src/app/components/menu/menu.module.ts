import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MenuComponent],
    exports: [MenuComponent, MenuRoutingModule]
})
export class MenuModule { }