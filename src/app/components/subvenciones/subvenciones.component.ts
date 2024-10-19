import { Component } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-subvenciones',
  templateUrl: './subvenciones.component.html',
  styleUrls: ['./subvenciones.component.scss']
})
export class SubvencionesComponent {
  public subvenciones: any;
  public get text() {
    return this.subvenciones.text;
  }
  public get title() {
    return this.subvenciones?.title;
  }
  public get image() {
    return this.subvenciones?.uniqueImage;
  }
  constructor(
    public apiSectionsService: ApiSectionsService,
    private appService: AppService,

  ) { }

  ngOnInit(): void {
    // this.appService.setIsContact(true);
    this.appService.broadcast('titleNav', 'subvenciones');

    this.getData();
  }


  getData() {
    this.apiSectionsService.getSection('67138fdb8520100019b2f25e').subscribe({
      next: section => {
        this.subvenciones = section.section;
      }
    });
  }
}
