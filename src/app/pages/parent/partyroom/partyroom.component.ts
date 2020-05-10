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
  name:string="";
  theTable:number= null;

  //Test2

  guests:string[] = []

   tables:{table:number, rotate?:string, deg:number ,left:string[], rigth:string[]}[] = [];

   public addGuest(){

    if(this.name.length<1){
      return;
    }else{

        this.guests.push(this.name)
        console.log(this.guests);
        this.name="";

    }
    
        
      
   }

   public removeGuest(name:string){

    let guestIndex = this.guests.findIndex( guest => guest === name);
    console.log(guestIndex)
    
   }

   public addTable(){
     
    if(this.tables.length < 1){

      this.tables.push({table:1, rotate:"table rotate", deg:0 ,left:[], rigth:[]});

    }else{
      let a = this.tables.sort((table1, table2)=> table1.table - table2.table)[this.tables.length-1]
      this.tables.push({table:a.table+1, rotate:"table rotate", deg:0, left:[], rigth:[]});
      
    }
     
     
      
   }

   public removeTable(tableNumber:number){
     let tableIndex = this.tables.findIndex(table => table.table===tableNumber);
     if(tableIndex!=-1){
        let a = this.tables.splice(tableIndex,1);

     }
     this.theTable = null;
   }


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

  public rotate(table){

    table.deg = (table.deg + 45) % 360;
    
    table.rotate = "table rotate"+ table.deg.toString();
    
    
  }

}
