import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movie:Movie = new Movie();
  info: any
  genre: any
  name: any
  lang: any
  time:any
  banner: any
  bg_banner: any
  bfile: any
  bgbfile:any
  bannerImage: any
  imgData: any
  status:any="enabled"
  price:any
  constructor(private api:AdminService) { }

  ngOnInit(): void {
    
  }
  onfilechangebanner(event:any) {
   this.bfile=<File>event.target.files[0];
  }
  onfilechangebgbanner(event:any) {
    this.bgbfile=<File>event.target.files[0];
   }
  addmovie() {
    
    this.movie.banner=this.bfile.name
    this.movie.bg_banner=this.bgbfile.name
    this.movie.name=this.name;
    this.movie.lang=this.lang;
    this.movie.info=this.info;
    this.movie.genre=this.genre;
    this.movie.time=this.time;
    
    this.movie.status=this.status;
    this.movie.price=this.price;
    this.api.addMovies(this.movie).subscribe(res=>{
      console.log(res)
    })

    alert("Movie Added Successfully")


  }

}