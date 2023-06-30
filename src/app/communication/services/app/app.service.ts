import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isHome: boolean = false;

  constructor() { }

  setIsHome(isHome: boolean) {
    this.isHome = isHome;
  }

  getIsHome() {
    return this.isHome;
  }

}
