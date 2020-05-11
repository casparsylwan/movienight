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
  guests:string[] = []
  tables:{table:number, round?:boolean, rotate?:string, deg:number, top?:string[], down?:string[] ,left:string[], rigth:string[]}[] = [];

  

   
  //Methods for 
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
      if(guestIndex!=-1){
        this.guests.splice( guestIndex, 1);
      }
       
   }

   public addTable(){
     
    if(this.tables.length < 1){

      this.tables.push({table:1, rotate:"table rotate", deg:0 ,left:[], rigth:[]});

    }else{
      let a = this.tables.sort((table1, table2)=> table1.table - table2.table)[this.tables.length-1]
      this.tables.push({table:a.table+1, rotate:"table rotate", deg:0, left:[], rigth:[]});  
    }    
   }

   public addRoundTable(){
     console.log("Hej");
    if(this.tables.length < 1){

      this.tables.push({table:1, round:true, rotate:"table rotate", deg:0 ,left:["b"], rigth:["c"], top:[], down:[]});
      console.log(this.tables);
    }else{
      let newTable = this.tables.sort((table1, table2)=> table1.table - table2.table)[this.tables.length-1]
      this.tables.push({table:newTable.table+1, round:true, rotate:"table rotate", deg:0, left:["a"], rigth:[], top:[], down:[]});  
    }    
   }


   public removeTable(tableNumber:number){
     let tableIndex = this.tables.findIndex(table => table.table===tableNumber);
     if(tableIndex!=-1){
        let removedTable = this.tables.splice(tableIndex,1);
        if(!removedTable[0].round){
          this.guests = [...this.guests, ...removedTable[0].left, ...removedTable[0].rigth]
        }else{
          this.guests = [...this.guests, ...removedTable[0].left, ...removedTable[0].rigth, ...removedTable[0].top, ...removedTable[0].down]
        }
        
        console.log(removedTable);

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
