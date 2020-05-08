import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partyroom',
  templateUrl: './partyroom.component.html',
  styleUrls: ['./partyroom.component.css']
})
export class PartyroomComponent implements OnInit {
  deg:number = 0;

  table:string = "table rotate" + this.deg.toString();

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

  

  constructor() { }

  ngOnInit(): void {
  }

  public rotate(){
    this.deg = (this.deg + 45) % 180;
    
    this.table = "table rotate"+this.deg.toString();
    
    
  }

  

 

  

    

   

    

}
