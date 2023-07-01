import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public title: string = '';
  public buttonLabel: string = '';
  public buttonLink: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private appService: AppService) {
    this.subscription.add(this.appService.subscribe('titleNav', (title) => {
      this.title = title;
    }));
    this.subscription.add(this.appService.subscribe('buttonNav', (button) => {
      this.buttonLabel = button.label;
      this.buttonLink = button.link;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.navigate('/');
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
