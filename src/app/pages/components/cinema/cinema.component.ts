import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() customersEvent = new EventEmitter();
  @Output() seatChoosenBoleanEvent = new EventEmitter();

   //Classnames
   wrapper:string = "wrapper";
   screen:string = "screen";
   moviebox:string = "moviebox";
   cinema:string = "cinema";
   seats:string ="seats";
   seat:string = " seat";

  //navigation boleans
  showOrder:boolean = false;
  seatChoosenBolean:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.creatSeats()
  }

  public getSeats(seat:Seat, seatNumber:number){
    seat.occupeid = !seat.occupeid;
    console.log(this.movieSeats.filter(seat =>seat.occupeid).length);
    let numberOfSeats = this.movieSeats.filter(seat =>seat.occupeid);
    console.log(numberOfSeats);
     if( numberOfSeats.length >=this.customers.length){
        for(let i = 0; i<numberOfSeats.length;i++){
          this.customers[i].seat = numberOfSeats[i].seat;
        }
        console.log(this.customers);
        this.seatChoosenBolean = true;
        console.log(this.seatChoosenBolean)
        this.customersEvent.emit(this.customers);
        this.seatChoosenBoleanEvent.emit(this.seatChoosenBolean);
     }  
  }

  public creatSeats(){
    for(let i=0; i<20; i++){
      let seat:Seat = new Seat();
      seat.seat = i+1;
      this.movieSeats.push(seat);
    }
  }

}
