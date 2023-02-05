import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private sideNavStatus: boolean = false;

  setsideNavValue(value: boolean) {
    this.sideNavStatus = value;
  }
  getsideNavValue(): boolean {
    return this.sideNavStatus;
  }
}
