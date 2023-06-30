import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.appService.setIsHome(true);
  }

  ngOnDestroy() {
    this.appService.setIsHome(false);
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
