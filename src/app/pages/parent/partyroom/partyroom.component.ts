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

  //Test
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

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
