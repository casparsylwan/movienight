import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from '../../../models/Customer';
import { RestaurantItem } from '../../../models/RestaurantItem';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input()  customers:Customer[];
  @Output() customersEvent = new EventEmitter();
            items:RestaurantItem = new RestaurantItem();

  //Headlines
  titleSubHeading:string = "Mat, dryck och godis";
  subHeading:string ="Välj stol att beställa till!";

  //card and classes
  card:string = "card";
  back:string = "card-back";
  contentFront:string = "content-front";
  btnCheck:string = "btn checkout";
  btn:string = "btn";

  //Heading choice
  chair:number = -1;
  id:number = -1;

  //CustomerVariables
  totalSum:number = 0;

  //TableVariables
  itemChoice:string;

  constructor() { }

  ngOnInit(): void {

    console.log(this.items);

    if(this.customers == null){
      this.forDevOnly();
    } 
    
    
  }

  public forDevOnly(){

    let customer:Customer = new Customer();
    let customer2:Customer = new Customer();
    let customer3:Customer = new Customer();
    let customer4:Customer = new Customer();
    
    customer.seat = 0;
    customer2.seat = 1;
    customer3.seat = 2;
    customer4.seat = 3;
    this.customers = [customer, customer2, customer3, customer4];

  }

  public flip(){

    if(this.card=="card"){
      this.card = "card is-flipped"
      this.back = "card-back is-flipped";
      this.contentFront = "content-front is-flipped";
      this.btnCheck = "btn checkout is-flipped";
      this.btn = "btn is-flipped";

    }else{
      this.card = "card"
      this.back = "card-back";
      this.contentFront = "content-front";
      this.btnCheck = "btn checkout";
      this.btn = "btn";
      console.log(this.back);
    }

  }

  public getCustomer( seat:number ){
    console.log("Hej");
    if(this.chair === seat){

      this.chair = -1;
      this.subHeading ="Välj stol att beställa till!";
      console.log(seat);
  
    }else{
  
      this.chair = seat;  
      this.subHeading = "Beställ mat till stol: " + seat;
      this.id = this.customers.findIndex(customer => customer.seat === seat);
      console.log(seat + " +1");
      }   
  }

  public setItem(item:string){
    this.itemChoice = item;
    this.flip();
  }

  public sortItem(){

    return this.items.items.filter(product => product.type===this.itemChoice);
  }

  public  buyItem(candy:any){

    let indexOfItem = this.customers[this.id].orderList.findIndex(item => item.name===candy.name);
    if( indexOfItem ===-1){
      this.customers[this.id].orderList.push({type:candy.type, name:candy.name, price:candy.price, amount:1});
      this.calcTotalSum();
    }else{
      this.customers[this.id].orderList[indexOfItem].amount += 1;
      this.customers[this.id].calcSum();
      console.log(this.customers[this.id].orderList[indexOfItem].amount);
    }
    this.customersEvent.emit(this.customers);
  }

  public removeItem(candy:any){

    let indexOfItem = this.customers[this.id].orderList.findIndex(item => item.name===candy.name);
    if(indexOfItem !=-1){

       let amount = this.customers[this.id].orderList[indexOfItem].amount;
       amount>1 ? this.customers[this.id].orderList[indexOfItem].amount = amount-1 : this.customers[this.id].orderList.splice(indexOfItem,1); 
    }
    this.customers[this.id].calcSum();
    this.customersEvent.emit(this.customers);

    // console.log(candy);
    // let index = this.customers[this.id].orderList.indexOf(candy);
    // if(index != -1){
    //   console.log(this.customers[this.id])
    //   this.customers[this.id].orderList.splice(index, 1);
    //   this.customers[this.id].calcSum();
    //   this.calcTotalSum()
    //   this.customersEvent.emit(this.customers);
    // }
    // this.calcTotalSum()
  
  }

  public calcTotalSum(){

    this.totalSum = 0;
    this.customers.forEach(customer => this.totalSum = this.totalSum + customer.totalSum) 

  }


}
