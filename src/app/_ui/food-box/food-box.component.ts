import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-box',
  templateUrl: './food-box.component.html',
  styleUrls: ['./food-box.component.scss']
})
export class FoodBoxComponent implements OnInit {
  @Input() dish: string = 'Plat';
  @Input() price: number = 15;
  @Input() description: string = 'descripción de plato';

  constructor() { }

  ngOnInit(): void {
  }

}
