import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    this.appService.setIsHome(true);
  }

  switchLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
  }

  ngOnDestroy() {
    this.appService.setIsHome(false);
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
