import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() customers:Customer[];

  //Booleans open
  showChair:boolean[] = [];
  showBool:boolean = false;

  //String names
  showStr:string = "Visa";


  constructor() { }

  ngOnInit(): void {

    if(this.customers == null){
      this.forDevOnly();
    } 
    for(let i=0; i<this.customers.length; i++){

      this.showChair.push(false);
    }
    
  }

  public forDevOnly(){

    let customer: Customer = new Customer();
    let customer2:Customer = new Customer();
    let customer3:Customer = new Customer();
    let customer4:Customer = new Customer();
    
    customer.seat = 0;
    customer.movie = "Avater";
    customer.orderList.push({type:'movie', name:'Avater',price: 65, amount:1})
    customer.orderList.push({type:'candy', name:'bilar',price: 20, amount:2})
    customer2.seat = 1;
    customer3.seat = 2;
    customer4.seat = 3;
    this.customers = [customer, customer2, customer3, customer4];

  }

  public showDetails(index:number){

    this.showChair[index] = !this.showChair[index];
    console.log(this.showChair);

  }

  public customerList(){
    if(this.showBool){
      this.showBool = !this.showBool;
      this.showStr = "Visa";
    }else{
      this.showStr = "DÖLJ";
      this.showBool = !this.showBool;
    }

}

public calcTotalSum():number
{
    let totalSum = 0;
    this.customers.forEach(customer =>{
      customer.calcSum();
      totalSum += customer.totalSum;
    })
    return totalSum;
}


  public pay(){

  }

}
