import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() customers:Customer[];
  @Output() customersEvent = new EventEmitter();
  @Output() goOnEvent = new EventEmitter();

  constructor(private datepipe: DatePipe) { }

  welcome:string ="Välkomna till Movie Dinner Restaurang";

  //The order
  tickets:number = 2;
  movieDate:string;
  time:string= "18:00";

  //Navigation booleans
  dateTimeDecided:boolean = false;
  numberOfGuestsDecided:boolean = false;
  goOntoTableBoolean:boolean = false;

  ngOnInit(): void {
    this.movieDate = this.datepipe.transform( new Date() , 'yyyy-MM-dd');

  }

  public getNumberOfTickets(){
    let guests = this.customers.length;
    if(guests<this.tickets){

        for(let i=guests; i<this.tickets; i++)
        {
          this.customers.push(new Customer());           
        }
    }else if(guests>this.tickets){

      for(let i= guests; i>this.tickets; i--){
        
        this.customers.pop();

      }
    }
    this.numberOfGuestsDecided = true;
    
  }

  public getDateAndTime(){

      this.getNumberOfTickets()

    this.customers.forEach(customer => {
      customer.dateTime = this.movieDate;
      customer.time = this.time;
    })
    
    this.dateTimeDecided = true;
    
  }

  public goToChooseTable(){
    let seat = 1;
    this.goOntoTableBoolean = true;
    this.goOnEvent.emit(this.goOntoTableBoolean);
    this.customers.forEach(customer =>{
      customer.seat = seat;
      seat++;

    });
    console.log(this.customers);
  }

  public sendToParent(){
    this.customersEvent.emit(this.customers);
  }

}
