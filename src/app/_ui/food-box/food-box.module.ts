import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBoxComponent } from './food-box.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FoodBoxComponent],
    exports: [FoodBoxComponent]
})
export class FoodBoxModule { }