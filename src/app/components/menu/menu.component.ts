import { Component } from '@angular/core';
import { ApiMenuService } from 'src/app/communication/api-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public dishes = [];
  constructor(
    private apiMenuService: ApiMenuService,
  ) {

  }
  ngOnInit() {
    this.apiMenuService.dishes().subscribe({
      next: res => {
        this.dishes = res.dishes;
        console.log(this.dishes);
      },
      error: err => console.error(err)
    });
  }

}
