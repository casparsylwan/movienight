import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  open:string = 'line close';
  topMenu:string = 'top-menu close';
  bottomMenu:string ='bottom-menu close';
  box:string  = 'box-nav close';
  menuLink:string = "open"

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(){

    if(this.open === 'line close'){
      this.open = 'line open';
      this.topMenu = 'top-menu open';
      this.bottomMenu = 'bottom-menu open';
      this.box =  'box-nav open'
      this.menuLink = 'open';
    }else if(this.open== 'line open'){
      this.open = 'line close';
      this.topMenu = 'top-menu close';
      this.bottomMenu = 'bottom-menu close';
      this.box  = 'box-nav close';
      this.menuLink = 'close';
    }else{
      this.open = 'line open';
      this.topMenu = 'top-menu open';
      this.bottomMenu = 'bottom-menu open';
      this.box =  'box-nav open';
      this.menuLink = 'open';
      
    } 
  }

}
