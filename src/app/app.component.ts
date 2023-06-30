import { Component } from '@angular/core';
import { AppService } from './communication/services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Restaurante San Roque | Brañosera';

  constructor(public appService: AppService) { }
}
