import { Component } from '@angular/core';
import { GlobalService } from 'src/app/appService/global.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  constructor(private _ser:GlobalService){
    this._ser.userName.subscribe(res =>{
      this.userName = res
    })
  }

  userName:string = 'hello'

  update(input:any){
    alert(input.value)
    this._ser.userName.next(input.value)
  }

}
