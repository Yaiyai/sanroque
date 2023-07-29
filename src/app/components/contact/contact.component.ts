import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public company: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private appService: AppService,
  ) {
    this.subscription.add(this.appService.subscribe('getCompany', (comp) => {
      this.company = comp;
      console.log(this.company);
    }));
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.appService.setIsContact(true);
    this.company = this.appService.getCompany();
  }

  ngOnDestroy() {
    this.appService.setIsContact(false);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
