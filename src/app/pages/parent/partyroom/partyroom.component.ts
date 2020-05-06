import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partyroom',
  templateUrl: './partyroom.component.html',
  styleUrls: ['./partyroom.component.css']
})
export class PartyroomComponent implements OnInit {

  x:number = 0;
  y:number = 0;
  // public onDragStart(){
  //   console.log("Start");
  // }

  public onDragMove(event:PointerEvent){
    
    console.log(`got drag move ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
    this.x=Math.round(event.clientX);
    this.y=Math.round(event.clientY);
  }
  // public onDragEnd(): void {
  //   console.log('got drag end');
  // }

  deg:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public rotate(){
    this.deg += 45;
  }

  

 

  

    

   

    

}
