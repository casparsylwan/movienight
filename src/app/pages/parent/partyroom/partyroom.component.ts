import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partyroom',
  templateUrl: './partyroom.component.html',
  styleUrls: ['./partyroom.component.css']
})
export class PartyroomComponent implements OnInit {

  deg:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public rotate(){
    this.deg += 45;
  }

  downX:number = 0;
  moveX:number = 0;
  moveY:number = 0;
  pressed:boolean = false; 

  xcord:number = 0;
  ycord:number = 0;

  event: MouseEvent;
    clientX = 0;
    clientY = 0;

    onEvent(event: MouseEvent): void {
        this.event = event;
    }

    coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;

        if(this.pressed){
          
          (event.clientX -110)>=0 ?  this.moveX = event.clientX -110 : this.moveX=0;
          (event.clientY - 60)>=0 ?  this.moveY = event.clientY - 60  : this.moveY=0;
        }
    }

    public pressDown(){
      this.downX = this.clientX;
      this.pressed = true;
      
    }

    public pressUp(){
      this.downX = 0;
      this.pressed = false;
    }

    public notOverClickArea(){
      this.pressed = false;
    }

    

}
