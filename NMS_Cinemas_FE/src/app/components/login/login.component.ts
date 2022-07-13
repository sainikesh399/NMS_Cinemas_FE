import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  users: Array<User> = [];
  user:User = new User();
  username: string='';
  password: string='';
  usersinloop:User = new User;
  flag:boolean=false
  


  constructor(private api: AdminService, private router: Router) { }

  ngOnInit(): void {
     
  
    this.username;
  }

  validateuser() {
    
    this.api.getUserByName(this.username).subscribe(data =>{
    this.users=data;
    if (this.users.length===0){
      alert("Please Enter valid Credentials?")
     }
    for (let i=0;i<this.users.length;i++){
      if (this.username === this.users[i].username && this.password === this.users[i].password) {
           
        localStorage.setItem('currentUser', JSON.stringify(this.users[i].id));
      
            this.router.navigate(['/welcomeuser']);
            this.flag=false
            break;
          }
          else {
            
            this.flag=true
          }
         }
         
         if(this.flag===true){
            alert("Please Enter valid Credentials")
         }
        
    })
   
  }
}