import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { FoodBoxModule } from 'src/app/_ui/food-box/food-box.module';
@NgModule({
    imports: [
        CommonModule,
        FoodBoxModule
    ],
    declarations: [MenuComponent],
    exports: [MenuComponent, MenuRoutingModule]
})
export class MenuModule { }