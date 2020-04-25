import { Component, OnInit,  Output, EventEmitter, Input } from '@angular/core';
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
  @Output() dateSetBooleanEvent = new EventEmitter();
  @Output() numberOfTicketChoosenEvent = new EventEmitter();
  @Input()  customers:Customer[];
  
  dateTime = new Date();

  //Customer variables
  




  //Movie variables
  movieInfo:movies = new movies();
  urlSafe: SafeResourceUrl;
  movieName:string="";
  movieDesc:string ="";
  ticketprice:number;
  tickets: number = 1;
  showTmes:string[];
  movieDate:string 
  time:string = "";
  
  //State variables
  state:number = 0;
  dateSetBoolean:boolean = false;
  numberOfTicketChoosen:boolean = false;


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
  

  //Messages
  orderText:string[] = ["Biljetter till ", "Kostar", "Hur många är ni?"];
  

  constructor(private sanitizer: DomSanitizer,
              private datepipe: DatePipe) { }

  ngOnInit(): void {
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
  

  }


  public setDateAndTime(i:number){

    
    this.time = " klockan: " + i;
    console.log(this.time);
    this.dateSetBoolean = true;

    let customer:Customer = new Customer();
    customer.movie = this.movieName;
    customer.dateTime = this.movieDate;
    customer.time = i.toString();
    customer.orderList.push({type:'Biljet', name:this.movieName, price:this.ticketprice, amount: 1 });
    customer.calcSum();
    this.customers.push(customer);
    
  }

  public getNumberOfTickets(){
    

    for(let i = 1; i<this.tickets; i++){
      let customer:Customer = new Customer();
      customer.movie = this.movieName;
      customer.dateTime = this.movieDate;
      customer.orderList.push({type:'Biljet', name:this.movieName, price:this.ticketprice, amount: 1 });
      customer.calcSum();
      console.log(customer.orderList[0].amount);
      this.customers.push(customer);
      
    }

    this.numberOfTicketChoosen = true;
    this.customersEvent.emit(this.customers);
    this.dateSetBooleanEvent.emit(this.dateSetBoolean);
    this.numberOfTicketChoosenEvent.emit(this.numberOfTicketChoosen);

  }

  public sendVariables(){
    this.customersEvent.emit(this.customers);
    this.dateSetBooleanEvent.emit(this.dateSetBoolean);
    this.numberOfTicketChoosenEvent.emit(this.numberOfTicketChoosen);
    
  }


}
