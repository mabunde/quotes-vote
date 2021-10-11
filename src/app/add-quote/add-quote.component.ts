import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import{Quotes} from '../quotes'

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(read:boolean){
    this.isComplete.emit(read);
  }
  upvote(){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
