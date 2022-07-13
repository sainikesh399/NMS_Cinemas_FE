
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-allshows',
  templateUrl: './allshows.component.html',
  styleUrls: ['./allshows.component.css']
})
export class AllshowsComponent implements OnInit {
movies:any
display:any
  constructor(private api:AdminService) { }

  ngOnInit(): void {
    this.api.getallmovies().subscribe(res=>{
      this.movies=res;
      console.log(res)
    })
  }
  remove(id:any){
    this.api.deleteMovie(id).subscribe(res=>{
      res
    })
    window.location.reload();
  }
  disable(id:any){
    this.api.getmoviebyid(id).subscribe(res=>{
      console.log(res)
      this.movies=res;
      this.movies.status="disabled";
      this.api.updatemovie(this.movies.id,this.movies).subscribe(res=>{
        console.log(res)
      })
      this.ngOnInit();
    })
   
  }
  enable(id:any){
    this.api.getmoviebyid(id).subscribe(res=>{
      console.log(res)
      this.movies=res;
      this.movies.status="enabled";
      this.api.updatemovie(this.movies.id,this.movies).subscribe(res=>{
        console.log(res)
      })
      this.ngOnInit();
    })
    
  }
}