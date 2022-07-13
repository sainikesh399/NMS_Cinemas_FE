import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users:User = new User()
  firstName:any
  lastName:any
  phone:any
  email:any
  address:any
  username:any
  password:any
user:User=new User()
  constructor(private Formbuilder: FormBuilder,private api:AdminService,private router:Router, ) { }
 

  ngOnInit(): void {

  }
  public signup(){

this.user.firstName=this.firstName;
this.user.lastName=this.lastName;
this.user.email=this.email;
this.user.phone=this.phone;
this.user.address=this.address;
this.user.username=this.username;
this.user.password=this.password;

    this.api.adduser(this.user).subscribe(res=>{
      this.users=res;
      console.log(res.id)
      localStorage.setItem('currentUser', JSON.stringify(res.id));
      
    })
   
    
    
this.router.navigate(['/welcomeuser']);
  }

}