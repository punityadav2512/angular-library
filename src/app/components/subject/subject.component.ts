import { Component } from '@angular/core';
import { SCREEN_SIZE } from 'src/app/models/screen-size.enum';
import { BookService } from 'src/app/services/book.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';


export interface data{
  numFound: number;
  docs: Array<any>;
}
const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
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

  subject: string = '';
  searching: number= 0;

  clearSubject() {
    this.subject = '';
  }
  bookOutput: number = 0 
  booksArray: Array<any> = []


  getBook(subject: string){
    this.searching = 1;
   
    this.subject = subject?? '';
    this.bookService.getBookBySubject(this.subject).subscribe(
      (data: data) => {
        this.bookOutput = data.numFound;
        this.booksArray = data.docs;
        this.searching = 2;
      });
  }
 
  size: SCREEN_SIZE;
}
