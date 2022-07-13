import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/classes/ticket';
import { User } from 'src/app/classes/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {
  user:any
  price:any
id:any
moviename:any
movie:any
date:any
seats:any
showtime:any
userid:any
banner:any
ticket: Ticket = new Ticket();
  constructor(private route:ActivatedRoute, private router:Router, private api:AdminService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
      console.log(this.id)
    this.api.getmoviebyid(this.id).subscribe(res=>{
      this.movie=res;
      this.price=res.price;
      this.moviename=res.name;
      this.banner=res.banner;
    })
this.user=localStorage.getItem("currentUser");
    console.log(this.user)
  }
createticket(movie:any){
  this.api.addedToCart(movie);
this.ticket.date=this.date;
this.ticket.showtime=this.showtime;
this.ticket.seats=this.seats;
this.ticket.userid=this.user;
this.ticket.moviename=this.moviename;
this.ticket.price=this.price;
this.ticket.banner=this.banner;
this.ticket.movieid=this.id;


this.api.addToCart(this.ticket).subscribe(res=>{
  console.log(res)
  alert("Added to the cart")
})

}

}