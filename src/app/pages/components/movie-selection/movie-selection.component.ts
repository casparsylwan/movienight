import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'
//Models
import { movies } from '../../../models/movies';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent implements OnInit {
  //Parent export
  @Output() customersEvent = new EventEmitter();

  
  dateTime = new Date();

  //Customer variables
  customers:Customer[] = new Array();




  //Movie variables
  movieInfo:movies = new movies();
  urlSafe: SafeResourceUrl;
  movieName:string="";
  movieDesc:string ="";
  ticketprice:number;
  tickets: number = 1;
  showTmes:string[];
  movieDate:string  //"2020-04-25";
  time:string = "";
  
  //State variables
  state:number = 0;
  dateSetBoolean:boolean = false;
  
  //ClassNames
  
  top:string ="top";
  down:string = "down"
  left:string = "left";
  right:string = "right";
  text:string = "text";
  mobilvideo:string = "mobilvideo";
  bigTrailer:string = "big-trailer";
  mobilTrailer:string =" mobil-trailer";
  mobilDesc:string = "mobil-desc";
  
  
  
  

  //Tickets
  numberOfTicketChoosen:boolean = false;

  //Messages
  orderText:string[] = ["Biljetter till ", "Kostar", "Hur många är ni?"];
  

  constructor(private sanitizer: DomSanitizer,
              private datepipe: DatePipe) { }

  ngOnInit(): void {
   // let today = new Date(this.dateTime.getFullYear(), this.dateTime.getMonth(), this.dateTime.getDate());
    this.movieDate = this.datepipe.transform( new Date() , 'yyyy-MM-dd');
  }

  public showTrailer(index:number){
    console.log("todo");
    //State change
    this.state = 1;
    this.top = "top video"
    this.down = "down video"
    this.left  = "left video"
    this.right = "right video"
    this.text = "text video"

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl( this.movieInfo.movies[index].trailer);
    
    this.movieName =  this.movieInfo.movies[index].name;
    this.ticketprice = this.movieInfo.movies[index].price;
    this.showTmes = this.movieInfo.movies[index].date;
    this.movieDesc = this.movieInfo.movies[index].desc;
  //  this.reload = !this.reload;

  }


  setDateAndTime(i:number){

    console.log(i +" " + this.movieDate );
    this.time = " klockan: " + i;
    this.dateSetBoolean = true;

  }

  public getNumberOfTickets(){
    

    for(let i = 0; i<this.tickets; i++){
      let customer:Customer = new Customer();
      customer.movie = this.movieName;
      customer.dateTime = this.movieDate;
      customer.orderList.push({type:'movie', name:this.movieName, price:this.ticketprice});
      customer.calcSum();
      this.customers.push(customer);
    }

    this.customersEvent.emit(this.customers);
  }


}
