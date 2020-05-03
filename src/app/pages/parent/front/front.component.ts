import { Component, OnInit } from '@angular/core';

import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
 
 //Global navigation variables
  customers:Customer[] = [];
  dateSetBoolean:boolean;
  numberOfTicketChoosen:boolean;
  seatChoosenBolean:boolean;
  goToCheckout:boolean;


  constructor() { }

  ngOnInit(): void {
  }

  test(){
    
  }

}
