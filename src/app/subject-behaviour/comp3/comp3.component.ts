import { Component } from '@angular/core';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

  constructor(private _ser:GlobalService){
    this._ser.userName.subscribe(res =>{
      this.userName = res
    })
  }

  userName:string = 'hello'

}
