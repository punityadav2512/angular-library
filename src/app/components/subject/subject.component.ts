import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';


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
  constructor(private bookService: BookService){}
  page = 1;
  pageSize = 10;
  selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}
  formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}
  title: string = '';
  authorName: string = '';

  subject: string = '';
  searching: number= 0;

  clearSubject() {
    this.subject = '';
  }
  bookOutput: number = 0 
  booksArray: Array<any> = []


  getBook(subject: string){
    this.searching = 1;
    // this.authorName = authorName?? '';
    // this.title = title ?? '';
    this.subject = subject?? '';
    this.bookService.getBookBySubject(this.subject).subscribe(
      (data: data) => {
        this.bookOutput = data.numFound;
        this.booksArray = data.docs;
        console.log(this.booksArray);
        this.searching = 2;
      });
  }
 
}
