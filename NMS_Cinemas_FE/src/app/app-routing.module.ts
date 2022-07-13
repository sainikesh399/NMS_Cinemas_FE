import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminmovieComponent } from './components/adminmovie/adminmovie.component';
import { AllshowsComponent } from './components/allshows/allshows.component';
import { BooknowComponent } from './components/booknow/booknow.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { WelcomeadminComponent } from './components/welcomeadmin/welcomeadmin.component';
import { WelcomeuserComponent } from './components/welcomeuser/welcomeuser.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'welcomeadmin', component:WelcomeadminComponent},
  {path: 'welcomeuser', component:WelcomeuserComponent},
  {path: '', component:AdminmovieComponent},
  {path: 'addmovie', component:AddmovieComponent},
  {path: 'allshows', component:AllshowsComponent},
  {path: 'updatemovie/:id', component:UpdatemovieComponent},
  {path: 'booknow/:id', component:BooknowComponent},
  {path: 'cart', component:CartComponent},
  {path: 'payment', component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }