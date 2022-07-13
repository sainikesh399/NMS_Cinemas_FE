import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userid: any
  tickets: any
  user: any
  moviename: any
  movie: any
  items: Array<any> = []
  majorarray: any[]= []
  movieobj: any
  movies: Array<Movie> = [];
  payable:any=0
  constructor( private api:AdminService) { }

  ngOnInit(): void {
    this.gettickets();
    this.user = this.api.getUserByid(this.userid).subscribe(res => {
      this.user = res;
    })
    this.api.getTicketByuserid(this.userid).subscribe(res => {
      this.tickets = res;
      this.majorarray.push(this.tickets)
    })

    console.log(this.movies)
    console.log(this.tickets)
  }
  gettickets(){
    this.userid = localStorage.getItem("currentUser");
    this.api.getTicketByuserid(this.userid).subscribe(res => {
      this.tickets=res;
      this.moviename = res.moviename;
      for(let i=0; i<this.tickets.length;i++){
        this.payable=this.payable+(this.tickets[i].price*this.tickets[i].seats);
        console.log(this.payable)
        }
    })
  }

}