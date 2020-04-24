export class Customer{
    seat:number;
    movie:string;
    dateTime:string;
    time:string;
    orderList:{type:string, name:string, price:number}[] = [];
    totalSum:number;

    public calcSum(){
        this.totalSum = 0;
        this.orderList.forEach(( item ) =>{
            this.totalSum += item.price;
            
        })
    }
}