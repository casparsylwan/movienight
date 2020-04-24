import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
 
 //Global navigation variables
  customers:Customer[];
  dateSetBoolean:boolean;
  numberOfTicketChoosen:boolean;
  seatChoosenBolean:boolean;


  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.seatChoosenBolean);
  }

}
