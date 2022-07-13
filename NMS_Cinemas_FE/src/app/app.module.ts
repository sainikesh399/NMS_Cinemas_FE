import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeuserComponent } from './components/welcomeuser/welcomeuser.component';
import { WelcomeadminComponent } from './components/welcomeadmin/welcomeadmin.component';
import { AdminmovieComponent } from './components/adminmovie/adminmovie.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AllshowsComponent } from './components/allshows/allshows.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { BooknowComponent } from './components/booknow/booknow.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { Ng2OrderPipe } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SignupComponent,
    WelcomeuserComponent,
    WelcomeadminComponent,
    AdminmovieComponent,
    AddmovieComponent,
    AllshowsComponent,
    UpdatemovieComponent,
    BooknowComponent,
    CartComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
   
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }