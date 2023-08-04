import { Component } from '@angular/core';
import { AppService } from './communication/services/app/app.service';
import { ApiCompanyService } from './communication/api-company.service';
import { Meta, Title } from '@angular/platform-browser';
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
    private metaTitle: Title
  ) {
    this.meta.addTags([
      { name: 'description', content: 'Restaurante de comida tradicional y caza' },
      { name: 'author', content: 'https://mfi.es/' },
      { name: 'keywords', content: 'Brañosera, Restaurante, 824, Jandrin, Caza, Menu del dia, Menu, Dia, Banquetes' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://www.sanroquebranosera.es/' },
      { name: 'twitter:title', content: 'Restaurante San Roque || Brañosera' },
      { name: 'twitter:description', content: 'Restaurante de comida tradicional y caza' },
    ]);
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
