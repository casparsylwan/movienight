import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  //card
  card:string = "card";

  constructor() { }

  ngOnInit(): void {
  }

  public flip(){

    if(this.card=="card"){
      this.card = "card is-flipped"
    }else{
      this.card = "card"
    }

  }

}
