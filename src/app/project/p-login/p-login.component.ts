import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PLandingPageComponent } from '../p-landing-page/p-landing-page.component';
import { GlobalService } from 'src/app/appService/global.service';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.css']
})
export class PLoginComponent {

  loginPage:boolean = false

  constructor(private router:Router, private Ser:GlobalService , private _loginSer: LoginRegistrationService){
    this._loginSer.loginPage.subscribe(res=>{
      this.loginPage = res
    })
  }

  myLoginForm!:FormGroup;
  myRegistrationForm!:FormGroup;

  ngOnInit(){
    this.myRegistrationForm = new FormGroup({
      'firstName' : new FormControl(''),
      'lastName' : new FormControl(''),
      'email' : new FormControl(''),
      'password' : new FormControl(''),
      'confirmPassword' : new FormControl(''),
    })

    this.myLoginForm = new FormGroup({
      'email' : new FormControl(''),
      'password' : new FormControl(''),
    })
  }

  @ViewChild(PLandingPageComponent) obj!:PLandingPageComponent

  users = [
    {name:'ravi',password:'Ravi@123'},
    {name:'kartik',password:'Kartik@123'},
    {name:'shubham',password:'Shubham@123'},
    {name:'hardik',password:'Hardik@123'},
  ]

  // onLogin(userName:any,password:any){

  // for (let i = 0; i < this.users.length; i++) {
  //         if(this.users[i].name === userName.value && this.users[i].password === password.value){
  //           this.router.navigate(['p-gallery'])
  //           localStorage.setItem('User',JSON.stringify(this.users[i].name))
  //           this.Ser.loggedIn.next(true)
  //           break;
  //       }
  //     }
  // }

  onLogin(){
    this._loginSer.loginUser(this.myLoginForm.value).subscribe((res:any)=>{
      if(res.length != 0){
        console.log("Login Successful");
      }else{
        console.log("Incorrect UserName or Password");
      }
    })
  }

  onRegistration(){
    this._loginSer.registration(this.myRegistrationForm.value).subscribe((res)=>{
      console.log(res,"User Registered Successfully");
      this.loginPage = true
    })
  }

  accounts(){
    this.loginPage = !this.loginPage
  }

}
