import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  open:string = 'line';
  link:string = 'link';
  box:string  = 'box-nav';

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(){

    if(this.open === 'line close'){
      this.open = 'line open';
      this.link = 'link open';
      this.box =  'box-nav open'
    }else if(this.open== 'line open'){
      this.open = 'line close';
      this.link = 'link close';
      this.box  = 'box-nav close';
    }else{
      this.open = 'line open';
      this.link = 'link open';
      this.box =  'box-nav open';
      
    } 
  }

}
