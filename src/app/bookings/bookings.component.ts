import { Component } from '@angular/core';
import { ApiService } from '../ApiService';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {


  items:any;
  totalAmount:any;
  totalReceivedAmount:any;
  totalDuesAmount:any;
  constructor(
    private api: ApiService,
  ) {}

  ngOnInit(){
    this.getBookings(); 
   }

   getBookings() {
    this.api.get('customer-bookings/'+ localStorage.getItem('user_id') ).subscribe(
      (resp: any) => {
        if(resp.code==200)
{
        this.items = resp.result.list.map((element:any) => {
          this.totalAmount = Number(this.totalAmount) + Number(element.total_cost)
          this.totalReceivedAmount = Number(this.totalReceivedAmount) + Number(element.total_received_amount)
          this.totalDuesAmount = Number(this.totalDuesAmount) + Number(element.current_dues)
          return element;
        })

      }
    }
    
    );
  }

}
