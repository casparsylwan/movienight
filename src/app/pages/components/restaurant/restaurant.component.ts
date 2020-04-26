import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  //card
  card:string = "card__content";

  constructor() { }

  ngOnInit(): void {
  }

  public flip(){

    if(this.card=="card__content"){
      this.card = "card__content is-flipped"
    }else{
      this.card = "card__content"
    }

  }

}
