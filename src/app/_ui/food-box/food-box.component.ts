import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-box',
  templateUrl: './food-box.component.html',
  styleUrls: ['./food-box.component.scss']
})
export class FoodBoxComponent implements OnInit {
  @Input() dish: string = '';
  @Input() alergenos: string[] = [];
  @Input() price: number = 0;
  @Input() description: string = '';

  public auxAler: any = {
    moluscos: 'https://res.cloudinary.com/sanroque/image/upload/v1652619205/alergenos/moluscos.svg',
    lacteos: 'https://res.cloudinary.com/sanroque/image/upload/v1652619205/alergenos/lacteos.svg',
    cascara: 'https://res.cloudinary.com/sanroque/image/upload/v1652619204/alergenos/cascara.svg',
    gluten: 'https://res.cloudinary.com/sanroque/image/upload/v1652619204/alergenos/gluten.svg',
    huevos: 'https://res.cloudinary.com/sanroque/image/upload/v1652619204/alergenos/huevos.png',
    soja: 'https://res.cloudinary.com/sanroque/image/upload/v1652619203/alergenos/soja.svg',
    crustaceos: 'https://res.cloudinary.com/sanroque/image/upload/v1652619203/alergenos/crustaceos.svg',
    sesamo: 'https://res.cloudinary.com/sanroque/image/upload/v1652619204/alergenos/sesamo.png',
    pescado: 'https://res.cloudinary.com/sanroque/image/upload/v1652619202/alergenos/pescado.svg',
    cacahuetes: 'https://res.cloudinary.com/sanroque/image/upload/v1652619202/alergenos/cacahuetes.svg',
    altramuces: 'https://res.cloudinary.com/sanroque/image/upload/v1652619202/alergenos/altramuces.svg',
    apio: 'https://res.cloudinary.com/sanroque/image/upload/v1652619203/alergenos/apio.png',
    mostaza: 'https://res.cloudinary.com/sanroque/image/upload/v1652619202/alergenos/mostaza.svg',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
