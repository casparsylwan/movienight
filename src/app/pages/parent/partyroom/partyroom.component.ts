import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-partyroom',
  templateUrl: './partyroom.component.html',
  styleUrls: ['./partyroom.component.css']
})
export class PartyroomComponent implements OnInit {
  //Rotate
  deg:number = 0;

  //ClassNames
  table:string = "table rotate" + this.deg.toString();
  handle:string = "handle rotate"

  //customer variables
  name:string="namn";

  //Test2

  guests:string[] = []

   tables:{table:number ,left:string[], rigth:string[]}[] = [];

   public addGuest(){

      if(this.name==="namn"){
        console.log(this.guests);
      }else{

        this.guests.push(this.name)
        console.log(this.guests);
        this.name="namn";

      }

      
   }

   public removeGuest(name:string){

    let guestIndex = this.guests.findIndex( guest => guest === name);
    console.log(guestIndex)
    
   }

   public addTable(){
      let nextTable = 1 + this.tables.length
      this.tables.push({table:nextTable, left:[], rigth:[]});
   }

   public removeTable(){
     this.tables.pop()
   }
  // [{
  //                 left:[
  //                   'Caspar S',
  //                   'Mays S',
  //                   'Jon V',               
  //                 ],
  //                 rigth : [
  //                   'Elsa D',
  //                   'Naoras V',
  //                   'Raoui G',
                   
  //                 ]

  // },
  // {
  //                 left:[
  //                   'C',
  //                   'M',
  //                   'J',
                  
  //                 ],
  //                 rigth : [
  //                   'E',
  //                   'N',
  //                   'R',
     
  // ]

  // },{
  //   left:[''],rigth:['']

  // }]

  //Test
  // todo = [
  //   'Caspar',
  //   'Mays',
  //   'Jon',
   
  // ];

  // done = [
  //   'Elsa',
  //   'Naoras',
  //   'Raoui',
   
  // ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  public rotate(){
    this.deg = (this.deg + 45) % 360;
    
    this.table = "table rotate"+this.deg.toString();
    
    
  }

}
