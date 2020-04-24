import { Component, OnInit, Input } from '@angular/core';
import { Customer }from './../../../models/Customer';
import { Seat } from './../../../models/seat';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  movieSeats:Seat[] = new Array();


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

   //seats reserved variables
   seatArray:Seat[] = new Array();

  constructor() { }

  ngOnInit(): void {
    this.creatSeats()
  }

  getSeats(seat:Seat, seatNumber:number){
    seat.occupeid = !seat.occupeid;
  //  this.movieSeats[seatNumber-1].occupeid = !this.movieSeats[seatNumber-1].occupeid;
    console.log(seat);
    
  }

  public creatSeats(){
    for(let i=0; i<20; i++){
      let seat:Seat = new Seat();
      seat.seat = i+1;
      this.movieSeats.push(seat);
    }
  }

}
