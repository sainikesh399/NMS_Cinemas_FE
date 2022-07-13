import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.css']
})
export class WelcomeuserComponent implements OnInit {
 // movies: any
  name: any
  lang:any
  genre:any
  movies:Movie[]=[]
  constructor(private api: AdminService) { }

  ngOnInit(): void {
    this.api.getallmovies().subscribe(res => {
      this.movies = res;
      console.log(res)
    })
  }
  booknow(id: any) {

  }
  namemovie() {
    if (this.name == "") {
      this.ngOnInit();
    }
    else {
      this.movies=this.movies.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
    }
  }
 langmovie(){
  if (this.lang == "") {
    this.ngOnInit();
  }
  else {
    this.movies=this.movies.filter(res=>{
      return res.lang.toLocaleLowerCase().match(this.lang.toLocaleLowerCase());
  })
  }
 }
 genremovie(){
  if (this.genre == "") {
    this.ngOnInit();
  }
  else {
      this.movies=this.movies.filter(res=>{
        return res.genre.toLocaleLowerCase().match(this.genre.toLocaleLowerCase());
    })
  }
 }
 sortbyname(){
  this.movies.sort((a,b)=>a.name.localeCompare(b.name));
  console.log(this.movies)
 }
 sortbyprice(){
  this.movies.sort((a,b)=>a.price.localeCompare(b.price));
  console.log(this.movies)
 }
 
}