import { Component } from '@angular/core';
import { AppService } from './communication/services/app/app.service';
import { ApiCompanyService } from './communication/api-company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Restaurante San Roque | Brañosera';
  company: any;

  constructor(
    public appService: AppService,
    private apiCompanyService: ApiCompanyService,
  ) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.apiCompanyService.getCompany().subscribe({
      next: data => {
        this.company = data.company[0];
        this.appService.setCompany(this.company);
        this.appService.broadcast('getCompany', this.company);
      },
      error: err => console.error('Error getting company: ', err)
    });
  }
}
