import { Component, OnInit } from '@angular/core';
import{Quotes} from'../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes (1,'Charles','Human spirit','Albert Einstein','The human spirit must prevail over technology to allow humans be in charge.', new Date(2019,7,12),0,0),
    new Quotes (2,'Wendy','Technology…','Max Frisch','Technology… the knack of so arranging  that we don’t have to experience it.',new Date(2019,7,14),0,0),
    new Quotes (3,'Mikey','The great myth','Libby Larsen','The great myth of our times is that technology is communication.',new Date(2019,6,3),0,0),
    new Quotes (4,'Beatrice','Communication','Clay Shirky','Communications tools don’t get socially interesting until they get technologically boring.',new Date(2019,7,7),0,0),
    new Quotes (5,'Charles','Harold Abelson','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.',new Date(2019,7,17),0,0),
    new Quotes (6,'Alfred','Alice Kahn','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.',new Date(2019,7,15),0,0)
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
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

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
