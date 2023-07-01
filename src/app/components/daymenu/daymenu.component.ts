import { Component } from '@angular/core';
import { ApiMenuService } from 'src/app/communication/api-menu.service';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-daymenu',
  templateUrl: './daymenu.component.html',
  styleUrls: ['./daymenu.component.scss']
})
export class DaymenuComponent {

  constructor(
    private apiMenuService: ApiMenuService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.appService.broadcast('titleNav', 'Menu del día');
    this.appService.broadcast('buttonNav', { label: 'Carta', link: '/carta' });
  }

  ngOnDestroy() {
    this.appService.broadcast('titleNav', '');
    this.appService.broadcast('buttonNav', { label: '', link: '' });
  }
}
