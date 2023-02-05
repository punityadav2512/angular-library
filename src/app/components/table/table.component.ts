import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

interface data{
  numFound: number;
  docs: Array<any>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {


  bookOutput: number = 0 
  booksArray: Array<any> = []
  isShow = false
 

  constructor(private bookService: BookService){}
  @Input() searchField: string= '';
  searchingCompleted: boolean= false;
  @Output() bookFetched = new EventEmitter<boolean>();

  ngOnInit(){
    

      // this.bookService.getBookByTitleOrAuthor(this.searchField, this.searchField).subscribe(
      //   (data: data) => {
      //     console.log(data);
      //     // console.log(this.searching);
      //     this.bookOutput = data.numFound;
      //     this.booksArray = data.docs;
      //     console.log(this.booksArray);
      //     // this.results.emit(true);
      //     this.bookFetched.emit(this.searchingCompleted);
        // });

    
  }

}


