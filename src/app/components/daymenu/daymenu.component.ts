import { Component } from '@angular/core';
import { ApiMenuService } from 'src/app/communication/api-menu.service';
import { AppService } from 'src/app/communication/services/app/app.service';
import { DayMenu } from 'src/app/models/dayMenu.model';

@Component({
  selector: 'app-daymenu',
  templateUrl: './daymenu.component.html',
  styleUrls: ['./daymenu.component.scss']
})
export class DaymenuComponent {
  public menu: DayMenu = new DayMenu();

  constructor(
    private apiMenuService: ApiMenuService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.appService.broadcast('titleNav', 'daymenu');
    this.appService.broadcast('buttonNav', { label: 'menu', link: '/carta' });
    this.getMenu();
  }

  getMenu() {
    this.apiMenuService.getDayMenu().subscribe({
      next: menu => this.menu = menu.daymenus[0]
    });
  }

  ngOnDestroy() {
    this.appService.broadcast('titleNav', '');
    this.appService.broadcast('buttonNav', { label: '', link: '' });
  }
}
