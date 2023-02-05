import { Component, Input } from '@angular/core';
import { SCREEN_SIZE } from 'src/app/models/screen-size.enum';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sideNavStatus : boolean = true;
  mobile: any;
  mediaQuery: any ;
  constructor(private sharedService: SharedService, private resizeSvc: ResizeService) { 
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
    this.sideNavStatus = this.sharedService.getsideNavValue();
    if(this.mediaQuery.matches) {
      this.sharedService.setsideNavValue(true);
      this.mobile = true;
    }

    this.resizeSvc.onResize$.subscribe(x => {
      this.mobile = x;
    });
  }
  ngOnInit(): void {
    this.sideNavStatus = this.sharedService.getsideNavValue();
  }

  size: SCREEN_SIZE;

  
}

