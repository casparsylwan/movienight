import { Component, OnInit, Input } from '@angular/core';
import { Customer }from './../../../models/Customer';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  //Global navigation variables
  @Input() numberOfTicketChoosen:boolean;
  @Input() dateSetBoolean:boolean;
  @Input() customers:Customer[];

   //Classnames
   wrapper:string = "wrapper";
   screen:string = "screen";
   moviebox:string = "moviebox";
   cinema:string = "cinema";
   seats:string ="seats";
   seat:string = " seat";

  constructor() { }

  ngOnInit(): void {
  }

  getSeats(seat:number){
    console.log(seat);
    console.log(this.numberOfTicketChoosen)
    console.log(this.dateSetBoolean)
    console.log(this.customers)
  }

}
