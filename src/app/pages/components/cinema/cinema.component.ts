import { Component, OnInit, Input } from '@angular/core';
import { Customer }from './../../../models/Customer';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  @Input() numberOfTicketChoosen:boolean;
  @Input() dateSetBoolean:boolean;
  @Input() customers:Customer[];
  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.numberOfTicketChoosen)
    console.log(this.dateSetBoolean)
    console.log(this.customers)
  }

}
