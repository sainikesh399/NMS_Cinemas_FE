import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/classes/movie';
import { Ticket } from 'src/app/classes/ticket';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userid: any
  tickets: Array<Ticket> = []
  user: any
  moviename: any
  movie: any
  items: Array<any> = []
  majorarray: any[] = []
  movieobj: any
  movies: Array<Movie> = [];
  payable: any = 0
  ticketid: any
  constructor(private api: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.payable=0
    // console.log(this.tickets[0].id)
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
  gettickets() {
    this.userid = localStorage.getItem("currentUser");
    this.api.getTicketByuserid(this.userid).subscribe(res => {
      this.tickets = res;
      this.moviename = res.moviename;
      for (let i = 0; i < this.tickets.length; i++) {
        this.payable = this.payable + (this.tickets[i].price * this.tickets[i].seats);
        console.log(this.payable)
      }
    })
  }
  remove(id: any) {
    this.api.deleteTicket(id).subscribe();
    //this.payable=0
    this.ngOnInit();
    window.location.reload();
    //this.router.navigate(['/cart'])

  }

  pay() {
    this.userid = localStorage.getItem("currentUser");
    this.api.getTicketByuserid(this.userid).subscribe(res => {
      for (let i = 0; res.length; i++) {
        this.api.deleteTicket(res[i].id).subscribe();
      }
    })

  }

}
