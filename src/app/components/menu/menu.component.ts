import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
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
  public activeFilter: string = 'Ver todos';
  public categories: { order: number; name: string; }[] = [];
  public get dishes(): Dish[] {
    return this.isFilterOn ? this.filtered : this.all;
  }

  constructor(
    private apiMenuService: ApiMenuService,
    private appService: AppService,
    private router: Router
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
        if (this.router.url === '/vinos') {
          this.categories = this.categories.filter(elm => elm.name === 'Cavas' || elm.name === 'Vinos Tintos' || elm.name === 'Vinos Blancos');
        } else {
          this.categories = this.categories.filter(elm => elm.name !== 'Cavas' && elm.name !== 'Vinos Tintos' && elm.name !== 'Vinos Blancos');
        }
        this.categories.unshift({ order: 0, name: 'Ver todos' });
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
        if (this.router.url === '/vinos') {
          this.all = this.all.filter(elm => elm.category === 'Cavas' || elm.category === 'Vinos Tintos' || elm.category === 'Vinos Blancos' || elm.category === 'Vinos');
        } else {
          this.all = this.all.filter(elm => elm.category !== 'Cavas' && elm.category !== 'Vinos Tintos' && elm.category !== 'Vinos Blancos' && elm.category !== 'Vinos');
        }
        console.log(res.dishes);
        console.log(this.all);
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
    this.activeFilter = type;
    if (type === 'Ver todos') {
      this.isFilterOn = false;
    } else {
      if (type === 'Vinos Tintos') {
        type = 'Vinos';
      }
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
