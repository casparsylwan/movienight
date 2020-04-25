import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-controll-order',
  templateUrl: './controll-order.component.html',
  styleUrls: ['./controll-order.component.css']
})
export class ControllOrderComponent implements OnInit {
  @Input()  customers:Customer[];
  @Output() customersEvent = new EventEmitter();

  
  order:string = "Öppna beställning";
  wrapper:string = "wrapper close";

  //Customer var
  totalSum:number= 0;
  expandBol:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openOrder(){
    
    if(this.wrapper === "wrapper close"){

      this.wrapper = "wrapper open";
      this.order = "Stäng beställning"
      this.calcTotalSum();

    }else{

      this.wrapper = "wrapper close";
      this.order = "Öppna beställning"
    }
  }

  public passInfoToCOmponents(){
    this.customersEvent.emit(this.customers);
  }

  public calcTotalSum(){
    this.totalSum = 0;
    this.customers.forEach(customer => {
      customer.calcSum();
      this.totalSum += customer.totalSum});
  }

  public expand(){
    this.expandBol=!this.expandBol;
  }

}
