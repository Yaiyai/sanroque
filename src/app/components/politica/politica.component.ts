import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.scss']
})
export class PoliticaComponent implements OnInit {
  public politica: any;
  public get text() {
    return this.politica.text;
  }
  public get title() {
    return this.politica?.title;
  }
  constructor(
    public apiSectionsService: ApiSectionsService,
    private appService: AppService,

  ) { }

  ngOnInit(): void {
    // this.appService.setIsContact(true);
    this.appService.broadcast('titleNav', 'politica');

    this.getData();
  }


  getData() {
    this.apiSectionsService.getSection('655e51e1e5372600191d3b4c').subscribe({
      next: section => {
        this.politica = section.section;
      }
    });
  }
}
