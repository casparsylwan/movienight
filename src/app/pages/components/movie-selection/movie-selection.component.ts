import { Component, OnInit } from '@angular/core';
import { movies } from '../../../models/movies';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent implements OnInit {

  //Movie variables
  movieInfo:movies = new movies();

  //Tickets
  numberOfTicketChoosen:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showTrailer(index:number){
    console.log("todo");
  }

}
