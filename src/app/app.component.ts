import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideNavStatus: boolean = true;
  constructor( private _sharedService: SharedService){
    this._sharedService.setsideNavValue(this.sideNavStatus);

  }
}
