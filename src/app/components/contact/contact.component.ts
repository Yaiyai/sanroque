import { Component } from '@angular/core';
import { ApiMenuService } from 'src/app/communication/api-menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(
    private apiMenuService: ApiMenuService,
  ) {

  }
  ngOnInit() {
    this.apiMenuService.prueba();
  }
}
