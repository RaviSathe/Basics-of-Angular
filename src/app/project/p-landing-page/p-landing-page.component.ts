import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PLoginComponent } from '../p-login/p-login.component';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-p-landing-page',
  templateUrl: './p-landing-page.component.html',
  styleUrls: ['./p-landing-page.component.css']
})
export class PLandingPageComponent implements AfterViewInit{

  constructor(private router:Router, private _ser:GlobalService){}

  @ViewChild(PLoginComponent) hide!:PLoginComponent;
  loggedIn:boolean = false
  user:any
  nav:boolean = false
  navTab = 'product'

  ngOnInit(){
    // console.log(localStorage.key(0));
    // console.log(localStorage.getItem('User'));
    this._ser.loggedIn.subscribe(res=>{
      this.loggedIn = res
    })
    if(localStorage.key(0)){
      this.loggedIn = true
      let u:any = localStorage.getItem('User')
      this.user = JSON.parse(u)
      this.router.navigate(['p-home'])
    }
  }

  ngAfterViewInit(): void {
  }

  logout(){
    localStorage.removeItem('User')
    this.router.navigate(['p-login'])
    this.loggedIn = false
  }

  home(nav:any){
    this.nav = true
    this.navTab = nav
  }

  about(nav:any){
    this.nav = true
    this.navTab = nav
  }

  contact(nav:any){
    this.nav = true
    this.navTab = nav
  }

  gallery(nav:any){
    this.nav = true
    this.navTab = nav
  }

  backLink(){
    this.router.navigate(['p-home'])
    this.nav = false
  }

}
