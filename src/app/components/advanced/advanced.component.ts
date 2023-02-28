import { Component } from '@angular/core';
import { SCREEN_SIZE } from 'src/app/models/screen-size.enum';
import { BookService } from 'src/app/services/book.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';


export interface data{
  total: number;
  hits: any;
}
const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent {
  sideNavStatus : boolean = true;
  mobile: any;
  mediaQuery: any ;
  constructor(private sharedService: SharedService, private bookService: BookService, private resizeSvc: ResizeService){
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
    this.sideNavStatus = this.sharedService.getsideNavValue();
    // this.sharedService.setsideNavValue(this.sideNavStatus);
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

  page = 1;
  pageSize = 10;
  selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}
  formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

  phrase: string='';
  searching: number =0;

  clearPhrase() {
    this.phrase = '';
  }
  bookOutput: number = 0 ;
  popularSubjects = [];
  booksArray: Array<any> = []


  searchInsideBook(phrase: string){
      this.searching = 1;
      this.phrase = phrase?? '';
      this.bookService.getBookByPhrase(this.phrase).subscribe(
        (data: data) => {
          this.bookOutput = data.hits.total;
          this.booksArray = data.hits.hits;
          console.log(this.booksArray);
          this.searching = 2;
        });
  }
 
  size: SCREEN_SIZE;
}
