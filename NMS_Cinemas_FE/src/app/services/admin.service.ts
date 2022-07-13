import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../classes/admin';
import { User } from '../classes/user';
import { Movie } from '../classes/movie';
import { Ticket } from '../classes/ticket';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 items: Movie[]=[];
//  private baseUrl:String="http://localhost:8090"
 private baseUrl:String="ec2-44-204-241-42.compute-1.amazonaws.com:8090"

  constructor(private http:HttpClient) { }

  public getAdminById(id:any){
    return this.http.get<Admin>(this.baseUrl+"/admin/"+id);
  }
  public adduser(user:any){
    return this.http.post<User>(this.baseUrl+"/user/add",user);
  }
  public getUserByName(name:any){
    return this.http.get<User[]>(this.baseUrl+"/user/username/"+name);
  }
  public getUserByid(id:any){
    return this.http.get<User[]>(this.baseUrl+"/user/"+id);
  }
  public addMovies(movie:any){
  return this.http.post(this.baseUrl+"/movie/add",movie,{responseType:'text' as 'json'});
  }
  public addmovie(movie:any){
  return this.http.post(this.baseUrl+"/movie/add",movie,{responseType:'text' as 'json'});
  }
  public getallmovies(){
    return this.http.get<any>(this.baseUrl+"/movie/all");
  }
  public getmoviebyid(id:any){
    return this.http.get<Movie>(this.baseUrl+"/movie/id/"+id);
  }
  public updatemovie(id:any, movie:any){
    return this.http.put<any>(this.baseUrl+"/movie/update/"+id,movie);
  }
  public deleteMovie(id:any){
    return this.http.delete(this.baseUrl+"/movie/delete/"+id);
  }
  public addToCart(ticket:any){
    console.log(ticket);
    return this.http.post<Ticket>(this.baseUrl+"/ticket/add",ticket);
  }
  public getTicketByuserid(userid:any){
    return this.http.get<any>(this.baseUrl+"/ticket/userid/"+userid);
  }
  public deleteTicket(id:any){
    return this.http.delete(this.baseUrl+"/ticket/delete/"+id)
  }
  public getTicketByid(ticketid:any){
    return this.http.get<Ticket>(this.baseUrl+"/ticket/id/"+ticketid);
  }
  

  addedToCart(movie:Movie){
    this.items.push(movie);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
}