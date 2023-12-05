import { Component } from '@angular/core';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {

  constructor(private _ser:GlobalService){
    this._ser.userName.subscribe(res =>{
      this.userName = res
    })
  }

  userName:string = 'hello'

  
}
