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
  public dishes: Dish[] = [];

  constructor(
    private apiMenuService: ApiMenuService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.appService.broadcast('titleNav', 'Carta');
    this.appService.broadcast('buttonNav', { label: 'Menú del día', link: '/menu-del-dia' });
    this.apiMenuService.dishes().subscribe({
      next: res => {
        this.dishes = res.dishes;
        console.log(this.dishes);
      },
      error: err => console.error(err)
    });
  }

  ngOnDestroy() {
    this.appService.broadcast('titleNav', '');
    this.appService.broadcast('buttonNav', { label: '', link: '' });
  }


}
