import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from './communication/services/app/app.service';
import { ApiCompanyService } from './communication/api-company.service';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
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
    private meta: Meta,
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

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
