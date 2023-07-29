import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(
    private router: Router,
    private appService: AppService,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.appService.setIsContact(true);
  }

  ngOnDestroy() {
    this.appService.setIsContact(false);
  }
  goHome() {
    this.router.navigate(['/']);
  }

}
