import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
id:any
movie:any
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
status:any
price:any
updatedgenre:any
  constructor(private route:ActivatedRoute, private router:Router, private api:AdminService) { }

  ngOnInit(): void {
   
    this.id=this.route.snapshot.paramMap.get('id');
      console.log(this.id)
    this.api.getmoviebyid(this.id).subscribe(res=>{
      this.movie=res;
    })
  }
  onfilechangebanner(event:any) {
    this.bfile=<File>event.target.files[0];
   }
   onfilechangebgbanner(event:any) {
     this.bgbfile=<File>event.target.files[0];
    }
 // this.api.getmoviebyid(this.id).
updatemovie(){
  if(this.name!=null && this.name!=undefined){
    this.movie.name=this.name;
  }
  if(this.bfile!=null && this.bfile!=undefined){
  this.movie.banner=this.bfile.name;
}
  if(this.bgbfile!=null && this.bgbfile!=undefined){
    this.movie.bg_banner=this.bgbfile.name;
  }
    if(this.lang!=null && this.lang!=undefined){
    this.movie.lang=this.lang;
  }
    if(this.info!=null && this.info!=undefined){
    this.movie.info=this.info;
  }
    if(this.genre!=null && this.genre!=undefined){
    this.movie.genre=this.genre;
  }
    if(this.time!=null && this.time!=undefined){
    this.movie.time=this.time;
  }
    if(this.status!=null && this.status!=undefined){
    this.movie.status=this.status;
  }
  if(this.price!=null && this.price!=undefined){
    this.movie.price=this.price;
  }
    this.api.updatemovie(this.id,this.movie).subscribe(res=>{
      console.log(res);
      this.movie=res;
    })
}
  updategenre(){
    this.movie.genre=this.updatedgenre
    this.api.updatemovie(this.id,this.movie).subscribe(res=>{
      console.log(res);
      this.movie=res;
    })
  }
}