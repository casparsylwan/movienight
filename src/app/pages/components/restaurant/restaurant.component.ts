import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  //card
  card:string = "card";
  back:string = "card-back"

  constructor() { }

  ngOnInit(): void {
  }

  public flip(){

    if(this.card=="card"){
      this.card = "card is-flipped"
    }else if(this.card=="card" && this.back=="card-back"){
      this.card = "card is-flipped";
      this.back = "card-back is-fliped";
    }else{
      this.card = "card"
    }

  }

}
