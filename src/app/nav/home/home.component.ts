import { Component } from '@angular/core';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _ser:GlobalService){
    this._ser.userName.subscribe(res =>{
      this.userName = res
    })
  }

  userName:string = ''

}
