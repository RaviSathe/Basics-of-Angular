import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PLandingPageComponent } from '../p-landing-page/p-landing-page.component';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.css']
})
export class PLoginComponent {

  constructor(private router:Router, private Ser:GlobalService){}

  @ViewChild(PLandingPageComponent) obj!:PLandingPageComponent

  users = [
    {name:'ravi',password:'Ravi@123'},
    {name:'kartik',password:'Kartik@123'},
    {name:'shubham',password:'Shubham@123'},
    {name:'hardik',password:'Hardik@123'},
  ]

  onLogin(userName:any,password:any){
  //   if(userName.value.length>0 && password.value.length>0){
  //     for (let i = 0; i < this.users.length; i++) {
  //       if(this.users[i].name === userName.value && this.users[i].password === password.value){
  //         this.router.navigate(['p-home'])
  //       localStorage.setItem('User',JSON.stringify(this.users[i].name))
  //       break;
  //     }else{
  //       if(this.users[i].name != userName.value){
  //         alert("Incorrect Username!!!")
  //         break
  //       }else if(this.users[i].password != password.value){
  //         alert("Incorrect Password!!!")
  //         break
  //       }else{
  //         alert("Wrong Credentials")
  //         break
  //       }
  //     }
  //   }
  // }
  for (let i = 0; i < this.users.length; i++) {
          if(this.users[i].name === userName.value && this.users[i].password === password.value){
            this.router.navigate(['p-gallery'])
            localStorage.setItem('User',JSON.stringify(this.users[i].name))
            // this.obj.loggedIn = true
            this.Ser.loggedIn.next(true)
            break;
        }
      }
  }

}
