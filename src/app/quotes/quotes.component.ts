import { Component, OnInit } from '@angular/core';
import{Quotes} from'../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes (1,'Humanity','Albert Einstein','"The human spirit must prevail over technology to allow humans be in charge."', new Date(2021,8,12),0,0),
    new Quotes (2,'Tech','Max Frisch','"Technology… the knack of so arranging  that we don’t have to experience it."',new Date(2021,8,14),0,0),
    new Quotes (3,'Philosophy','Libby Larsen','"The great myth of our times is that technology is communication."',new Date(2021,8,3),0,0),
  ];

  get sortQuotes(){
    return this.quotes.sort((a,b) =>{
      return<any>new Date(b.completeDate) - <any>new Date(a.completeDate)
    })
  }

  addedQuote(quote:Quotes){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  
  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
