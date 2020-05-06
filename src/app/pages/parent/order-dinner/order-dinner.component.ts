import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-order-dinner',
  templateUrl: './order-dinner.component.html',
  styleUrls: ['./order-dinner.component.css']
})
export class OrderDinnerComponent implements OnInit {
  goOntoTableBoolean:boolean;
  customers:Customer[] = [];

  //Navigation booleans
  haveTable:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
