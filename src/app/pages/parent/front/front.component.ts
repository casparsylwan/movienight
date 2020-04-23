import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
 @Input() customers:Customer[];

  constructor() { }

  ngOnInit(): void {
  }

}