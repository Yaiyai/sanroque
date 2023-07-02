import { Component } from '@angular/core';
import { ApiMenuService } from 'src/app/communication/api-menu.service';
import { AppService } from 'src/app/communication/services/app/app.service';
import { Dish } from 'src/app/models/dish.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public all: Dish[] = [];
  public filtered: Dish[] = [];
  public isFilterOn: boolean = false;
  public get dishes(): Dish[] {
    return this.isFilterOn ? this.filtered : this.all;
  }
  public categories: { order: number; name: string; }[] = [];
  constructor(
    private apiMenuService: ApiMenuService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.getCategories();
    this.appService.broadcast('titleNav', 'Carta');
    this.appService.broadcast('buttonNav', { label: 'Menú del día', link: '/menu-del-dia' });
  }

  getCategories() {
    this.apiMenuService.getCategories().subscribe({
      next: company => {
        this.categories = company.company[0].categories;
        this.categories.unshift({ order: 0, name: 'Ver todas' });
        console.log(this.categories);
        this.getAllDishes();
      },
      error: err => console.error(err)
    });
  }

  getAllDishes() {
    this.isFilterOn = false;
    this.apiMenuService.dishes().subscribe({
      next: res => {
        this.all = res.dishes;
        this.filtered = this.dishes;
      },
      error: err => console.error(err)
    });
  }

  ngOnDestroy() {
    this.appService.broadcast('titleNav', '');
    this.appService.broadcast('buttonNav', { label: '', link: '' });
  }

  filter(type: string) {
    if (type === 'Ver todas') {
      this.isFilterOn = false;
    } else {
      this.apiMenuService.filterDishes(type).subscribe({
        next: res => {
          this.isFilterOn = true;
          this.filtered = res.dishes;
        },
        error: err => console.error(err)
      });
    }
  }


}
