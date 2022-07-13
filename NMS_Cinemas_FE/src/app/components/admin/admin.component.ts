import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private adminentity = new Admin();
  loginform = new FormGroup(
    {
      name: new FormControl(''),
      password: new FormControl('')
    }
  );


  constructor(private Formbuilder: FormBuilder, private api: AdminService, private router: Router) { }

  ngOnInit(): void {
    let resp = this.api.getAdminById(1);
    resp.subscribe((data) => this.adminentity = data);
  }

  validateadmin() {
    if (this.loginform.value.name == this.adminentity.name && this.loginform.value.password == this.adminentity.password) {
      localStorage.setItem('currentUser', JSON.stringify(this.adminentity));

      this.router.navigate(['/welcomeadmin']);
    }
    else {
      alert("Please Enter valid Credentials")
    }

  }

  deleteadmin() {
  }
}