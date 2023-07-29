import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
type MessageCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private handler = new Subject<any>();
  public isHome: boolean = false;
  public isContact: boolean = false;

  constructor() { }

  setIsHome(isHome: boolean) {
    this.isHome = isHome;
  }

  getIsHome() {
    return this.isHome;
  }

  setIsContact(isContact: boolean) {
    this.isContact = isContact;
  }

  getIsContact() {
    return this.isContact;
  }

  broadcast(type: string, payload: any = null) {
    this.handler.next({ type, payload });
  }

  subscribe(type: string, callback: MessageCallback): Subscription {
    return this.handler.pipe(
      filter(message => message.type === type),
      map(message => message.payload))
      .subscribe(callback);
  }
}
