import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
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

  // stateMap = new Map<string, Book[]>();
  sideNavStatus : boolean = true;
  mobile: any;
  mediaQuery: any ;
  constructor(private sharedService: SharedService, private bookService: BookService, private resizeSvc: ResizeService){
    this.get5Subjects();
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
  get5Subjects(){
    this.bookService.getTop5Subjects().subscribe(
      (data: any) => {
        this.booksArray = data.docs;
        this.bookOutput = data.numFound;
      } 
    )
 }
  ngOnInit(): void {
    this.sideNavStatus = this.sharedService.getsideNavValue();
    
    // this.get5Subjects();
  }



  page = 1;
  pageSize = 10;
  selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}
  formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

  subject: string='';
  searching: number =0;

  clearSubject() {
    this.subject = '';
  }
  bookOutput: number = 0 
  booksArray: Array<any> = []


  getBook(subject: string){
    // if(this.stateMap.has(this.subject)){
    //   this.booksArray = this.stateMap.get(this.subject) as Book[];
    // }else{
      this.searching = 1;
      this.subject = subject?? '';
      this.bookService.getBookBySubject(this.subject).subscribe(
        (data: data) => {
          // this.stateMap.set(this.subject, data.docs);
          this.bookOutput = data.numFound;
          this.booksArray = data.docs;
          this.searching = 2;
        });
  }

  // getTopBook(subject: string){
  //   this.searching = 1;
  //   this.subject = subject?? '';
  //   this.bookService.getTopBookSubject(this.subject).subscribe(
  //     (data: data) => {
  //       // this.stateMap.set(this.subject, data.docs);
  //       this.bookOutput = data.numFound;
  //       this.booksArray = data.docs;
  //       this.searching = 2;
  //     });
  // }
 
  size: SCREEN_SIZE;
}

