import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from "../quotes"


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quotes(1,'When you reach the end of your rope, tie a knot in it and hang on.','Ernest Hemingway', 'Nuriath',0,0,),
    new Quotes(2,'There is nothing permanent except change','Heraclitus','Nuriath',0,0),
    new Quotes(3, 'You cannot shake hands with a clenched fist.','Indira Gandhi','Nuriath',0,0),
    new Quotes(4, 'Let us sacrifice our today so that our children can have a better tomorrow.','A. P. J. Abdul Kalam','Nuriath',0,0 ),
    new Quotes(5, 'It is better to be feared than loved, if you cannot be both.','Niccolo Machiavelli','Nuriath',0,0),
    new Quotes(6, 'Learning never exhausts the mind.','Leonardo da Vinci','Nuriath',0,0 ),
    new Quotes(7,'All that we see or seem is but a dream within a dream.','Edgar Allan Poe','Nuriath',0,0),

]

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

completeQuotes(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }

  @Input() Quotes: Quotes
  
  constructor() { }

  ngOnInit() { }
}